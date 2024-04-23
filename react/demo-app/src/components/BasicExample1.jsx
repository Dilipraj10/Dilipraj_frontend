import Alert from 'react-bootstrap/Alert';

function BasicExample1() {
  return (
    <>
      {[
        'primary',
        'secondary',
        
      ].map((variant) => (
        <Alert key={variant} variant={variant}>
          This is a {variant} alert—check it out!
        </Alert>
      ))}
    </>
  );
}

export default BasicExample1;