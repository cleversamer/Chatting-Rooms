import ListGroup from "react-bootstrap/ListGroup";

const rooms = ["general", "tech", "finance", "crypto"];

const Sidebar = () => {
  return (
    <>
      <h2>Available Rooms</h2>
      <ListGroup>
        {rooms.map((room, index) => (
          <ListGroup.Item key={index}>{room}</ListGroup.Item>
        ))}
      </ListGroup>

      <h2>Members</h2>
    </>
  );
};

export default Sidebar;
