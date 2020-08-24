db.createUser(
  {
    user: "homestead",
    pwd: "secret",
    roles: [
      {
        role: "readWrite",
        db: "nalurispace"
      }
    ]
  }
);
