const User = require("../models/user");
const bcrypt = require("bcrypt");
const fetch = require("node-fetch");
exports.signup = async (req, res) => {
  //  console.log("REQ BODY", req.body);
  const user = new User(req.body);
  const salt = await bcrypt.genSalt(10);
  user.password = await bcrypt.hash(user.password, salt);
  user.save((err, user) => {
    if (err) {
      console.log(err);
      return res.status(400).json({
        err: "failed to register try again",
      });
    }
    res.json({
      id: user._id,
      email: user.email,
      password: user.password,
    });
  });
};

exports.signin = async (req, res) => {
  const body = req.body;
  const user = await User.findOne({ email: body.email });
  if (user) {
    const checkPassword = await bcrypt.compare(body.password, user.password);
    if (checkPassword) {
      res.status(200).json({
        message: "Login successful",
      });
    } else {
      res.status(400).json({ error: "Check your password again" });
    }
  } else {
    res.status(401).json({ error: "Not registered yet" });
  }
};

exports.showdata = (req, res) => {
  var data = [
    {
      albumId: 1,
      id: 1,
      title: "accusamus beatae ad facilis cum similique qui sunt",
      url: "https://via.placeholder.com/600/92c952",
      thumbnailUrl: "https://via.placeholder.com/150/92c952",
    },
    {
      albumId: 1,
      id: 2,
      title: "reprehenderit est deserunt velit ipsam",
      url: "https://via.placeholder.com/600/771796",
      thumbnailUrl: "https://via.placeholder.com/150/771796",
    },
    {
      albumId: 1,
      id: 3,
      title: "officia porro iure quia iusto qui ipsa ut modi",
      url: "https://via.placeholder.com/600/24f355",
      thumbnailUrl: "https://via.placeholder.com/150/24f355",
    },
    {
      albumId: 1,
      id: 4,
      title: "culpa odio esse rerum omnis laboriosam voluptate repudiandae",
      url: "https://via.placeholder.com/600/d32776",
      thumbnailUrl: "https://via.placeholder.com/150/d32776",
    },
    {
      albumId: 1,
      id: 5,
      title: "natus nisi omnis corporis facere molestiae rerum in",
      url: "https://via.placeholder.com/600/f66b97",
      thumbnailUrl: "https://via.placeholder.com/150/f66b97",
    },
    {
      albumId: 1,
      id: 6,
      title: "accusamus ea aliquid et amet sequi nemo",
      url: "https://via.placeholder.com/600/56a8c2",
      thumbnailUrl: "https://via.placeholder.com/150/56a8c2",
    },
    {
      albumId: 1,
      id: 7,
      title: "officia delectus consequatur vero aut veniam explicabo molestias",
      url: "https://via.placeholder.com/600/b0f7cc",
      thumbnailUrl: "https://via.placeholder.com/150/b0f7cc",
    },
    {
      albumId: 1,
      id: 8,
      title: "aut porro officiis laborum odit ea laudantium corporis",
      url: "https://via.placeholder.com/600/54176f",
      thumbnailUrl: "https://via.placeholder.com/150/54176f",
    },
    {
      albumId: 1,
      id: 9,
      title: "qui eius qui autem sed",
      url: "https://via.placeholder.com/600/51aa97",
      thumbnailUrl: "https://via.placeholder.com/150/51aa97",
    },
    {
      albumId: 1,
      id: 10,
      title: "beatae et provident et ut vel",
      url: "https://via.placeholder.com/600/810b14",
      thumbnailUrl: "https://via.placeholder.com/150/810b14",
    },
    {
      albumId: 1,
      id: 10,
      title: "beatae et provident et ut vel",
      url: "https://via.placeholder.com/600/810b14",
      thumbnailUrl: "https://via.placeholder.com/150/810b14",
    },
    {
      albumId: 1,
      id: 10,
      title: "beatae et provident et ut vel",
      url: "https://via.placeholder.com/600/810b14",
      thumbnailUrl: "https://via.placeholder.com/150/810b14",
    },
    {
      albumId: 1,
      id: 10,
      title: "beatae et provident et ut vel",
      url: "https://via.placeholder.com/600/810b14",
      thumbnailUrl: "https://via.placeholder.com/150/810b14",
    },
    {
      albumId: 1,
      id: 10,
      title: "beatae et provident et ut vel",
      url: "https://via.placeholder.com/600/810b14",
      thumbnailUrl: "https://via.placeholder.com/150/810b14",
    },
    {
      albumId: 1,
      id: 11,
      title: "nihil at amet non hic quia qui",
      url: "https://via.placeholder.com/600/1ee8a4",
      thumbnailUrl: "https://via.placeholder.com/150/1ee8a4",
    },
    {
      albumId: 1,
      id: 12,
      title:
        "mollitia soluta ut rerum eos aliquam consequatur perspiciatis maiores",
      url: "https://via.placeholder.com/600/66b7d2",
      thumbnailUrl: "https://via.placeholder.com/150/66b7d2",
    },
    {
      albumId: 1,
      id: 13,
      title: "repudiandae iusto deleniti rerum",
      url: "https://via.placeholder.com/600/197d29",
      thumbnailUrl: "https://via.placeholder.com/150/197d29",
    },
    {
      albumId: 1,
      id: 14,
      title: "est necessitatibus architecto ut laborum",
      url: "https://via.placeholder.com/600/61a65",
      thumbnailUrl: "https://via.placeholder.com/150/61a65",
    },
    {
      albumId: 1,
      id: 15,
      title: "harum dicta similique quis dolore earum ex qui",
      url: "https://via.placeholder.com/600/f9cee5",
      thumbnailUrl: "https://via.placeholder.com/150/f9cee5",
    },
    {
      albumId: 1,
      id: 16,
      title:
        "iusto sunt nobis quasi veritatis quas expedita voluptatum deserunt",
      url: "https://via.placeholder.com/600/fdf73e",
      thumbnailUrl: "https://via.placeholder.com/150/fdf73e",
    },
    {
      albumId: 1,
      id: 17,
      title: "natus doloribus necessitatibus ipsa",
      url: "https://via.placeholder.com/600/9c184f",
      thumbnailUrl: "https://via.placeholder.com/150/9c184f",
    },
    {
      albumId: 1,
      id: 18,
      title: "laboriosam odit nam necessitatibus et illum dolores reiciendis",
      url: "https://via.placeholder.com/600/1fe46f",
      thumbnailUrl: "https://via.placeholder.com/150/1fe46f",
    },
    {
      albumId: 1,
      id: 42,
      title: "voluptatibus a autem molestias voluptas architecto culpa",
      url: "https://via.placeholder.com/600/ca50ac",
      thumbnailUrl: "https://via.placeholder.com/150/ca50ac",
    },
    {
      albumId: 1,
      id: 43,
      title: "eius hic autem ad beatae voluptas",
      url: "https://via.placeholder.com/600/6ad437",
      thumbnailUrl: "https://via.placeholder.com/150/6ad437",
    },
    {
      albumId: 1,
      id: 44,
      title: "neque eum provident et inventore sed ipsam dignissimos quo",
      url: "https://via.placeholder.com/600/29fe9f",
      thumbnailUrl: "https://via.placeholder.com/150/29fe9f",
    },
  ];

  // extract only the titles from the json data we got
  var dataarr = [];
  for (var i = 0; i < data.length; i++) {
    dataarr.push(data[i]["title"]);
  }

  // dataarr = JSON.stringify(dataarr);
  res.json(dataarr);
};
