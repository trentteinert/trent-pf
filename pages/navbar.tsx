import { NextPage, GetServerSideProps } from 'next';
import globalStyles from '../styles/variables.module';
interface Props {}

const Navbar: NextPage<Props> = ({}) => {
  return (
    <>
      <style jsx>{globalStyles}</style>
      <main className='main'>
        <h1 className='title'>Trent Teinert</h1>
        <p className='contact'>contact@trentteinert.com</p>
        <div className='navContainer'>
          <div className='navBtn'>+ bio</div>
          <div className='navBtn'>+ CV</div>
          <div className='navBtn'>- menu</div>
        </div>
      </main>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  return {
    props: {},
  };
};

export default Navbar;
