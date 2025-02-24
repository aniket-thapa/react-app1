const User = (props) => {
  const { name } = props;
  return (
    <div className="user-card">
      <h2>Name: {name}</h2>
      <h3>Location: Jammu, J&K</h3>
      <h3>Email Id: aniketthapa.dev@gmail.com</h3>
    </div>
  );
};

export default User;
