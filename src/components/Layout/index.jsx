import { Outlet } from "react-router-dom"


const Layout = () => {
  return (
     <div>
        <div className='w-[1250px] mt-[144px] mb-[67px] flex justify-between h-[813px]'>
          <div className=" w-[942px] shadow-[0px_1px_10px_0px_#00000040] 
           rounded-[15px_0_0_15px]  pt-[31px] pl-[32px]" >
              <Outlet />
           </div> 
           {/* <SideBarDashboard /> */}
      </div>
     </div>
  )
}

export default Layout