import User from './User';
import UserClass from './UserClass';

const About = () => {
  return (
    <div>
      <h1>About Us Page</h1>
      <User name={'Aniket Thapa (functional)'} />
      <UserClass name={'Aniket Thapa (class)'} />
    </div>
  );
};

export default About;
