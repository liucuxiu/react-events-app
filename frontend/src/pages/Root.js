import MainNavigation from '../components/MainNavigation';
import classes from '../components/MainNavigation.module.css';
import { Outlet , useNavigation} from 'react-router-dom';

function RootLayout() {
  const navigation = useNavigation()

  return (
    <>
      <MainNavigation/>
      <main>
        {/*{navigation.state === 'loading'&& <p>Loading...</p>}*/}
        <Outlet/>
      </main>
    </>
  );
}

export default RootLayout;