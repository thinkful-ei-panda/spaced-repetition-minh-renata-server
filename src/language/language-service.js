const LinkedList = require("./linked-list");

const LanguageService = {
  getUsersLanguage(db, user_id) {
    return db
      .from("language")
      .select(
        "language.id",
        "language.name",
        "language.user_id",
        "language.head",
        "language.total_score"
      )
      .where("language.user_id", user_id)
      .first();
  },

  getLanguageWords(db, language_id) {
    return db
      .from("word")
      .select(
        "word.id",
        "language_id",
        "original",
        "translation",
        "next",
        "memory_value",
        "correct_count",
        "incorrect_count",
        "language.head"
      )
      .join("language", "language.id", "=", "word.language_id")
      .where({ language_id });
  },

  getNextWord(db, user_id) {
    return db
      .from("language")
      .select(
        "language.head",
        "word.correct_count",
        "word.incorrect_count",
        "language.total_score",
        "word.original",
        "word.translation"
      )
      .where("language.user_id", user_id)
      .first()
      .leftJoin("word", "language.head", "word.id");
  },

  getHeadWord(db, head_id) {
    return db
    .from("word")
    .select("*")
    .where("id", head_id);
  },

  createList(words) {
    let list = new LinkedList();

    let current = words.find((word) => word.id === word.head);
    list.insertFirst(current);
    let nextWord = words.find((word) => {
      return word.id === current.next;
    });

    while (nextWord) {

      list.insertLast(nextWord);
      nextWord = words.find((word) => {
        return word.id === nextWord.next;
      });
    }
    return list;
  },

  async updateDB(db, language, list, user_id){
    let trx = await db.transaction();
    try {
      let currNode = list.head;

      while (currNode) {
        let val = currNode.value;

        await db("word")
          .transacting(trx)
          .where({ id: val.id })
          .update({
            next: currNode.next && currNode.next.value.id,
            correct_count: val.correct_count,
            incorrect_count: val.incorrect_count,
            memory_value: val.memory_value,
          });
        currNode = currNode.next;
      }

      await db("language")
      .transacting(trx)
      .where({ user_id })
      .update({
        head: language.head,
        total_score: language.total_score,
      });

      await trx.commit();
    } catch (e) {
      console.log(e.stack())
      await trx.rollback();
    }
  },

  displayList(list) {
    let currNode = list.head;
    while (currNode !== null) {
      currNode = currNode.next;
    }
  },
};

module.exports = LanguageService;
