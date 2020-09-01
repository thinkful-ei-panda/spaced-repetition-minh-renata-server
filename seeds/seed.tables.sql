BEGIN;

TRUNCATE
  "word",
  "language",
  "user";

INSERT INTO "user" ("id", "username", "name", "password")
VALUES
  (
    1,
    'admin',
    'Dunder Mifflin Admin',
    -- password = "pass"
    '$2a$10$fCWkaGbt7ZErxaxclioLteLUgg4Q3Rp09WW0s/wSLxDKYsaGYUpjG'
  );

INSERT INTO "language" ("id", "name", "user_id")
VALUES
  (1, 'Portuguese', 1);

INSERT INTO "word" ("id", "language_id", "original", "translation", "next")
VALUES
  (1, 1, 'banheiro', 'restroom', 2),
  (2, 1, 'obrigado', 'thank you', 3),
  (3, 1, 'adeus', 'goodbye', 4),
  (4, 1, 'macaco', 'monkey', 5),
  (5, 1, 'vinho', 'wine', 6),
  (6, 1, 'madrugada', 'dawn', 7),
  (7, 1, 'cachorro', 'dog', 8),
  (8, 1, 'jantar', 'dinner', 9),
  (9, 1, 'sobremesa', 'dessert', 10),
  (10, 1, 'namorado', 'boyfriend', 11),
  (11, 1, 'cavalo', 'horse', 12),
  (12, 1, 'filme', 'movie', 13),
  (13, 1, 'doce', 'sweet', 14),
  (14, 1, 'massa', 'pasta', 15),
  (15, 1, 'sorvete', 'ice cream', NULL);
  

UPDATE "language" SET head = 1 WHERE id = 1;

-- because we explicitly set the id fields
-- update the sequencer for future automatic id setting
SELECT setval('word_id_seq', (SELECT MAX(id) from "word"));
SELECT setval('language_id_seq', (SELECT MAX(id) from "language"));
SELECT setval('user_id_seq', (SELECT MAX(id) from "user"));

COMMIT;
