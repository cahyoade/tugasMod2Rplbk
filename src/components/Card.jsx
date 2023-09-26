function Card({name, nim, email}) {
    const style = {
        display: 'flex',
        flexDirection: 'column',
        padding: '36px 48px',
        backgroundColor: 'white',
        color: 'black',
        borderRadius: '8px',
        marginBottom: '12px'
    }

    const nameStyle = {
        fontWeight: 'bold',
        fontSize: '32px',
        marginTop: '0',
        marginBottom: '18px',
    }

    const subStyle = {
        margin: '0 0 0 0',
        fontWeight: '300'
    }

    return ( 
        <div style={style}>
            <p style={nameStyle}>{name}</p>
            <p style={subStyle}>{nim}</p>
            <p style={subStyle}>{email}</p>
        </div>
    );
}
    
export default Card;
