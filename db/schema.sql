DROP DATABASE IF EXISTS accord_db;
CREATE DATABASE accord_db;
USE accord_db;
CREATE TABLE questions (
	id int NOT NULL AUTO_INCREMENT,
	question text,
	category int,
	PRIMARY KEY (id)
);

INSERT INTO questions (question,category) VALUES("I prefer to read the book over watching the movie?",1);
INSERT INTO questions (question,category) VALUES(" I prefer to be a millionaire over having super powers?",1);
INSERT INTO questions (question,category) VALUES(" I prefer Summer over winter?",1);
INSERT INTO questions (question,category) VALUES(" I prefer Marvel over DC? ",1);
INSERT INTO questions (question,category) VALUES(" I prefer rural over urban?",1);

INSERT INTO questions (question,category) VALUES(" I find it relatively easy to make emotional connections to others.",2);
INSERT INTO questions (question,category) VALUES(" I find that I am comfortable while not having close emotional relationships.",2);
INSERT INTO questions (question,category) VALUES(" I find that I struggle to communicate my needs directly.",2);
INSERT INTO questions (question,category) VALUES(" I have difficulty developing trust in others.",2);
INSERT INTO questions (question,category) VALUES(" You would forgive a partner for cheating on you if it was the “right” person.",2);

INSERT INTO questions (question,category) VALUES(" If you saw a person drop a wallet, would you give it back to them?",3);
INSERT INTO questions (question,category) VALUES(" If you saw your enemy drowning, would you save them?",3);
INSERT INTO questions (question,category) VALUES(" Would you prefer brutal honesty over sugar coating?",3);
INSERT INTO questions (question,category) VALUES(" Would you save the life of your pet over a stranger?",3);
INSERT INTO questions (question,category) VALUES(" Would you compromise key moral values for the right amount of money?",3);

INSERT INTO questions (question,category) VALUES(" Have you ever been on a wreck?",4);
INSERT INTO questions (question,category) VALUES(" Have you ever ridden a horse?",4);
INSERT INTO questions (question,category) VALUES(" Have you ever volunteered in your community?",4);
INSERT INTO questions (question,category) VALUES(" Have you ever lied about a family member dying to get out of doing something?",4);
INSERT INTO questions (question,category) VALUES(" Have you ever gone camping?",4);


INSERT INTO questions (question,category) VALUES(" I find it more meaningful to spend time with someone over having them do something practical for me. ",5);
INSERT INTO questions (question,category) VALUES(" I find it more meaningful when I receive gifts from the person I love over spending leisure time together.",5);
INSERT INTO questions (question,category) VALUES(" I find it more meaningful to spend time with someone I love oversharing physical touch.",5);
INSERT INTO questions (question,category) VALUES(" I find it more meaningful to receive unprompted compliments from someone over being near each other.",5);
INSERT INTO questions (question,category) VALUES(" I find it more meaningful when I feel connected to someone through a hug than receiving a gift that shows they care about me.",5);
