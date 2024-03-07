import SongTracker from "../assets/Tracker.png"
export default function Projects(){

    return(
        <div className='h-screen w-full bg-lime-950'>
      <div className='bg-amber-50 h-20'/>
      <p className='pt-4 pb-3 tracking-tighter text-right mr-12 font-serif text-amber-50 text-6xl'> Projects? He's got 'em.</p>
      <div className="flex">
        <div className="rounded-xl w-1/2 bg-amber-50 p-8 m-12">
       <img src={SongTracker} className="shadow-xl" alt="WHRW Song Tracker"/>

        </div>

      </div>
      </div>
    )
}