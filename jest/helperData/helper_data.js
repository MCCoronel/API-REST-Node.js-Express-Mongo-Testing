const testAuthRegister = {
  name: "User test",
  age: 20,
  email: "test@test.com",
  password: "12345678",
};

const testAuthLogin = {
    email: "test@test.com",
    password: "12345678",
  };
  

  const testAuthRegisterAdmin = {
    name: "User test",
    age: 20,
    email: "test@test.com",
    role: ["admin"],
    password: "12345678",
  };

  const testStorageRegister = {
    url: "http://localhost:3001/file-test.mp3",
    filename: "file-test.mp3"
  };

  const testDataTrack = {
    name: "Ejemplo",
    album: "Ejemplo",
    cover: "http://image.com",
    artist: {
      name: "Ejemplo",
      nickname: "Ejemplo",
      nationality: "ARG",
    },
    duration: {
      start: 1,
      end: 3,
    },
    mediaId: "",
  };

  const testUpdateDataTrack = {
    name: "Update",
    album: "Ejemplo",
    cover: "http://image.com",
    artist: {
      name: "Ejemplo",
      nickname: "Ejemplo",
      nationality: "ARG",
    },
    duration: {
      start: 1,
      end: 3,
    },
    mediaId: "",
  };
  

  module.exports = {
    testAuthRegister,
    testAuthLogin,
    testAuthRegisterAdmin,
    testStorageRegister,
    testDataTrack,
    testUpdateDataTrack
  }