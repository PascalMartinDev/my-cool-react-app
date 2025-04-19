//import { useState } from "react";
import { Authenticator } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
//import { fetchUserAttributes } from "aws-amplify/auth";
//import { useEffect } from "react";

export function Auth() {
  return (
    <div>
      <Authenticator>
        {({ signOut, user }) => (
          <main>
            <h1>Welcome Back {user?.username}</h1>
            <button onClick={signOut}>Sign out</button>
          </main>
        )}
      </Authenticator>
    </div>
  );
}

/*
function UserDetails() {
  const [nickName, setNickName] = useState<string>();

  useEffect(() => {
    async function getUserData() {
      const userData = await fetchUserAttributes();
      setNickName(userData.nickname);
    }
    getUserData();
  }, []);

  return (
    <div>
      <h1>Hello {nickName} and Welcome!</h1>
    </div>
  );
}
*/
