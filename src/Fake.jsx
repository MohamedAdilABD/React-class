import React, { useState } from 'react';
import './fake.css';
import { TextField, IconButton, InputAdornment } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const data = [
  // games
  { title: 'Subway Surfers', category: 'Games', img: 'https://th.bing.com/th/id/OIP.Dm-bJie2e03ugW09R2KqogHaHa?rs=1&pid=ImgDetMain' },
  { title: 'Crossy Road', category: 'Games', img: 'https://th.bing.com/th/id/R.a25b6a64e8ae54734b624b6d56dbe29f?rik=YgTe%2f6WaYZsO%2fw&riu=http%3a%2f%2fassets2.ignimgs.com%2f2014%2f11%2f26%2fcrossy-road-buttonjpg-0b1279.jpg&ehk=bULcg0sQe1JrfUsX2bQCZpe9HXnJHgO617wMDg3nzbg%3d&risl=&pid=ImgRaw&r=0' },
  { title: 'Super Chef', category: 'Games', img: 'https://play-lh.googleusercontent.com/Y9XK6lSQPg0w5Rc96nn6miuvZUUTXqgR6uPnMdLcYCy65Pcwb-K7NPkD0PIoqs-GDw' },
  { title: 'Angry Birds', category: 'Games', img: 'https://th.bing.com/th/id/OIP.kmuKOm0qexOtGRhP-jkyEwHaHa?rs=1&pid=ImgDetMain' },
  { title: 'Hill Climb 2', category: 'Games', img: 'https://th.bing.com/th/id/OIP.wgqQyD0RW_YeBx5Bbp-rkQHaHa?rs=1&pid=ImgDetMain' },
  { title: 'Temple Run', category: 'Games', img: 'https://upload.wikimedia.org/wikipedia/en/9/98/Temple_Run_2.png' },
  { title: 'Dr. Driving', category: 'Games', img: 'https://th.bing.com/th/id/OIP.LbklbZWkE_i1BEx3WnOUPAAAAA?rs=1&pid=ImgDetMain' },
  { title: 'Smurfs Bubble', category: 'Games', img: 'https://th.bing.com/th/id/OIP.5OFvNQxrF7ETsWYljiAN8QHaH9?rs=1&pid=ImgDetMain' },
  { title: 'My Talking Tom', category: 'Games', img: 'https://i.pinimg.com/280x280_RS/36/03/3d/36033d812700b6f036e95e7e8e7c27d1.jpg' },
  { title: 'Grade 1', category: 'Games', img: 'https://th.bing.com/th/id/OIP.4IMPLO5j1dYr8-xuta1mwAAAAA?rs=1&pid=ImgDetMain' },

  // News
  { title: 'Inshorts', category: 'News', img: 'https://static.c.realme.com/IN/thread/1393191459234111488.png' },
  { title: 'Waytonews', category: 'News', img: 'https://th.bing.com/th/id/OIP.CXc0myza6ZLA4wAM7eoLQAAAAA?rs=1&pid=ImgDetMain' },
  { title: 'Google news', category: 'News', img: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-16-512.png' },
  { title: 'Flipboard', category: 'News', img: 'https://th.bing.com/th/id/OIP.zKHX2OjGRV13UYhCTb9_oQHaHa?rs=1&pid=ImgDetMain' },
  { title: 'Smartnews', category: 'News', img: 'https://lh3.googleusercontent.com/5GP9ziilsx7xTkpoIuMGiET1VzZAKLCp413l0jQWS3g84OyaJpQOESC9MsRSK4hsAA=w170' },
  { title: 'BBCnews', category: 'News', img: 'https://th.bing.com/th/id/OIP.rd_9jahMXoIHm1Xseaw6gQHaHa?w=1000&h=1000&rs=1&pid=ImgDetMain' },
  { title: 'CNNnews', category: 'News', img: 'https://files.softicons.com/download/system-icons/windows-8-metro-icons-by-dakirby309/png/512x512/Internet%20Shortcuts%20&%20Manufacturers/CNN.png' },
  { title: 'Daily wire', category: 'News', img: 'https://logoeps.com/wp-content/uploads/2014/02/51678-dw-design-software-square-logotype-icon-vector-icon-vector-eps.png' },
  { title: 'AP news', category: 'News', img: 'https://th.bing.com/th/id/OIP.VzL9dEjf2oFeAjwqaFFyYQHaHa?rs=1&pid=ImgDetMain' },
  { title: 'NDTV', category: 'News', img: 'https://th.bing.com/th/id/OIP._nCdyzaP2w2BvyPTDDemnAAAAA?rs=1&pid=ImgDetMain' },
// social

{ title: 'Facebook', category: 'Social', img: 'https://th.bing.com/th/id/OIP.zaiIl16zqTKDuhYIxeop0wHaHa?rs=1&pid=ImgDetMain' },
{ title: 'Instagram', category: 'Social', img: 'https://th.bing.com/th/id/OIP.-ZirgQE5pr8e7htQWowJIgHaHa?rs=1&pid=ImgDetMain' },
{ title: 'Whatsapp', category: 'Social', img: 'https://static.vecteezy.com/system/resources/previews/016/716/480/non_2x/whatsapp-icon-free-png.png' },
{ title: 'Messager', category: 'Social', img: 'https://th.bing.com/th/id/OIP.FGtpmST04iVlqegsGznM5AHaHe?rs=1&pid=ImgDetMain' },
{ title: 'Snapchat', category: 'Social', img: 'https://th.bing.com/th/id/OIP.IlNhrXSVUFvlsgCC3ElRtQHaHa?rs=1&pid=ImgDetMain' },
{ title: 'Twitter', category: 'Social', img: 'https://th.bing.com/th/id/OIP.s5ujrdq0imWUFoiH0lWbNwHaHa?rs=1&pid=ImgDetMain' },
{ title: 'Printerst', category: 'Social', img: 'https://th.bing.com/th/id/OIP.8tYoL8QKSbPNas2LL3b01QHaHa?rs=1&pid=ImgDetMain' },
{ title: 'Wechat', category: 'Social', img: 'https://th.bing.com/th/id/OIP.hSAXr2W43xqDBq3gClqbhQHaHa?rs=1&pid=ImgDetMain' },
{ title: 'In Linked', category: 'Social', img: 'https://pngmind.com/wp-content/uploads/2019/08/Linkedin-Logo-Png-Transparent-Background-1.png' },
{ title: 'Telegram', category: 'Social', img: 'https://th.bing.com/th/id/OIP.fyCCXwkRz9vrY_TsNRq5rgHaHa?rs=1&pid=ImgDetMain' },


//food
{ title: 'zomoto', category: 'Food', img: 'https://th.bing.com/th/id/OIP.T5rqNgTeKUfpPkXm1LkYawHaHa?rs=1&pid=ImgDetMain' },
{ title: 'Swiggy', category: 'Food', img: 'https://th.bing.com/th/id/OIP.zB7jANoTEeTCrmtnYEWxLQAAAA?rs=1&pid=ImgDetMain' },
{ title: 'Domino pizza', category: 'Food', img: 'https://th.bing.com/th/id/OIP.i8zVnP5IcJkvxVh3I8bwbQAAAA?rs=1&pid=ImgDetMain' },
{ title: 'All in one', category: 'Food', img: 'https://th.bing.com/th/id/OIP.bb1EwQPepFNF3fw7yudWDAAAAA?w=256&h=256&rs=1&pid=ImgDetMain' },
{ title: 'Instacart', category: 'Food', img: 'https://th.bing.com/th/id/OIP.eytEPsy4o7D_dTixbL0dxQAAAA?rs=1&pid=ImgDetMain' },
{ title: 'Saucey', category: 'Food', img: 'https://cdn-icons-png.flaticon.com/512/8582/8582952.png' },
{ title: 'Waitr', category: 'Food', img: 'https://cdn-icons-png.flaticon.com/512/8582/8582952.png' },
{ title: 'Grubhub', category: 'Food', img: 'https://www.pngmart.com/files/23/Grubhub-Logo-PNG-Transparent.png' },
{ title: 'Uber Eats', category: 'Food', img: 'https://th.bing.com/th/id/OIP.2AOiWhVt3Sa6FhtmLvgnzQAAAA?rs=1&pid=ImgDetMain' },
{ title: 'Door Dash', category: 'Food', img: 'https://th.bing.com/th/id/OIP.pV9A59kccK95W0bNkl69rAAAAA?rs=1&pid=ImgDetMain' },


];

const categories = ['Social', 'Games', 'News', 'Food'];

const Fake = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('Games');

  const filteredData = data.filter(
    app =>
      app.category === activeCategory &&
      app.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>App Store</h1>
      <TextField style={{width:"400px"}}
  label="Search"
  InputProps={{
    endAdornment: (
      <InputAdornment position="end">
        <IconButton>
          <SearchIcon />
        </IconButton>
      </InputAdornment>
    ),
  }}
  value={searchTerm}
  onChange={e => setSearchTerm(e.target.value)}
/>

      {/* <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={e => setSearchTerm(e.target.value)}
      /> */}
      <div className="categories">
        {categories.map(category => (
          <span
            key={category}
            className={category === activeCategory ? 'active' : ''}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>
      <div className="card-list">
        {filteredData.map((app, index) => (
          <div key={index} className="card">
            <img src={app.img} alt={app.title} />
            <h3 style={{fontSize:"12px"}}>{app.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Fake;