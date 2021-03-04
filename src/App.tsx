import React, { useContext } from "react";
import UserContext, { UserProvider } from "./context/user";
import Routes from "./Routes";
import GlobalStytles, { Container, Wrapper } from "./styles/global";

function App() {
  const context = useContext(UserContext);
  console.log(context);
  return (
    <div>
      <Wrapper>
        <Container>
          <GlobalStytles />
          <UserProvider>
            <Routes />
          </UserProvider>
        </Container>
      </Wrapper>
    </div>
  );
}

export default App;
