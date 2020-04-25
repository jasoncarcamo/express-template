CREATE TABLE users (
    id INTEGER PRIMARY KEY GENERATED BY DEFAULT AS IDENTITY,
    firstName TEXT NOT NULL,
    lastName TEXT NOT NULL,
    address TEXT NOT NULL,
    city TEXT NOT NULL,
    state TEXT NOT NULL,
    zipCode TEXT NOT NULL,
    mobileNumber TEXT NOT NULL,
    password VARCHAR(65535) NOT NULL,
    points INTEGER DEFAULT 0 NOT NULL
);