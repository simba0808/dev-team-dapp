'use client';
const ProfileHeader = () => {
  return (
    <>
      <div className="flex flex-row justify-between items-center px-5 py-2.5 rounded-t-xl bg-black/90">
        <span className="m-auto">
          <h3 className='text-white font-normal text-base'>
            Account Settings
          </h3>
        </span>
      </div>
    </>
  );
};

export default ProfileHeader;