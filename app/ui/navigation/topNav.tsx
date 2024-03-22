
import NavItems from '@/app/ui/navigation/navItems';

export default function TopNav() {
    return (
        <div className='h-12 bg-red-700 m-0 fixed top-0 w-full z-10'> 
        <div className='flex justify-end'>
          <NavItems />
        </div>
      </div>
    );
    }