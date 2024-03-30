
import NavItems from '@/app/ui/navigation/navItems';

export default function TopNav() {
  return (
      <div className='bg-red-700 m-0 relative w-full'> 
          <div className='flex justify-end'>
              <NavItems />
          </div>
      </div>
  );
}