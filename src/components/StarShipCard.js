import Card from 'react-bootstrap/Card';

function StarShipCard({ship}) {
  return (
    <Card 
    border="primary"  
    bg={"light"}
    style={{textAlign: "center", width: '15rem', margin: "10px" }}
    className="mb-2"
    >
    <Card.Body>
        <Card.Title> {ship.name.toUpperCase()} </Card.Title>
    </Card.Body>
    </Card>
  );
}

export default StarShipCard;