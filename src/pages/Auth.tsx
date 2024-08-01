import styled from 'styled-components';
const Auth = () => {
    const params = new URL(document.URL).searchParams;
    const code = params.get('code');
    const type = params.get('type');
    console.log(code);
  return (
    <AuthWrapper
    >
      <h1>code</h1>
      {type}
      <br/>
      {code}
    </AuthWrapper>
  )
};

const AuthWrapper = styled.div`
margin:100px;
`;

export default Auth ;