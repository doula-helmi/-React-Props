import propTypes from 'prop-types';

const containerStyle ={
  backgroundColor: '#231E39',
	borderRdius: '5px',
	boxShadow: '0px 10px 20px -10px rgba(0,0,0,0.75)',
	color: '#B3B8CD',
	paddingTop: '30px',
  paddingBottom: '30px',
	position: 'relative',
	width: '350px',
	maxWidth: '100%',
	textAlign: 'center',
  borderRadius:'1rem'
}
const ButtonStyle = {
  cursor: 'pointer',
	backgroundColor: '#03BFCB',
	border: '1px solid #03BFCB',
	borderRadius: '3px',
	color: '#231E39',
	fontFamily: 'Montserrat, sans-serif',
	fontWeight: '500',
	padding: '10px 25px'
}


const Profile = (props) => {
  return (
    <>
      <div style={containerStyle}>
        <img style={{width:'11rem',height:'11rem'}}
          src={props.children}
          alt="User logo"
        />
        <h1 style={{margin:'10px 0'}}>{props.FullName}</h1>
        <h4>{props.Profession}</h4>
        <p style={{fontSize:'14px',lineHeight:'21px'}}>
        {props.Bio}
        </p>
        <div className="buttons">
          <button style={ButtonStyle}  onClick={()=> props.handleName(props.FullName) }>Click Here</button>
        </div>
      </div>
    </>
  );
};

Profile.propTypes = {
  FullName: propTypes.string,
  children: propTypes.string,
  Profession: propTypes.string,
  Bio: propTypes.string,
  displayname: propTypes.func
}

Profile.defaultProps = {
  FullName:"Doula Helmi",
  Bio:"La vie ne se mesure pas par le nombre de respirations, mais par les moments qui nous coupent le souffle",
  Profession:"Fullstack JS"
}


export default Profile;
