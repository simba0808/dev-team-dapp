import {AdminPanelSettingsOutlined, ContactSupportOutlined, LanguageOutlined, LibraryBooksOutlined, Logout} from '@mui/icons-material';

import useAuthSession from '@/lib/auth/hooks/useAuthSession';

import ProfileHeader from './ProfileHeader';
import './profile.scss';

const ProfileMenu = () => {
  const SIWE_PROVIDER = {
    id: 'siwe',
    name: 'SIWE',
  };
  
  const {disconnect} = useAuthSession(SIWE_PROVIDER.id as Provider);

  return (
    <div className='max-w-80'>
      <div className='min-w-72'>
        <ProfileHeader />
        <div className="flex flex-row justify-start gap-2 items-center px-4 py-2.5 rounded-none bg-black/70">
          <LanguageOutlined className="text-white" fontSize='small'/>
          <h3 className='text-white font-normal text-base'>
            Language
          </h3>
          <h3 className='text-white/40 text-right font-normal text-base'>
            en
          </h3>
        </div>
        <div className="flex flex-row justify-start gap-2 items-center px-4 py-2.5 rounded-none bg-black/70">
          <AdminPanelSettingsOutlined className="text-white" fontSize='small'/>
          <h3 className='text-white font-normal text-base'>
            Web2 login
          </h3>
          <h3 className='text-white/40 text-right font-normal text-base'>
            on
          </h3>
        </div>
        <div className='bg-black/70 px-4 py-2'>
          <hr className='text-white/20'></hr>
        </div>
        <a href='https://wiki.actocracy.com'>
          <div className="flex flex-row justify-start gap-2 items-center px-4 py-2.5 rounded-none bg-black/70 cursor-pointer">
            <LibraryBooksOutlined className="text-white" fontSize='small'/>
            <h3 className='text-white font-normal text-base'>
              Learn
            </h3>
          </div>
        </a>
        <a href='https://t.me/actocracy_en'>
          <div className="flex flex-row justify-start gap-2 items-center px-4 py-2.5 rounded-none bg-black/70 cursor-pointer">
            <ContactSupportOutlined className="text-white" fontSize='small'/>
            <h3 className='text-white font-normal text-base'>
              Help center
            </h3>
          </div>
        </a>
        <div onClick={disconnect} className="flex flex-row justify-start gap-2 items-center px-4 py-2.5 rounded-b-xl bg-black/70 cursor-pointer">
          <Logout className="text-white" fontSize='small'/>
          <h3 className='text-white font-normal text-base'>
            Log out
          </h3>
        </div>
      </div>
    </div>
  );
};

export default ProfileMenu;