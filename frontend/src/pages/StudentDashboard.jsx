import '../components/Student.css';
import notes from '../../public/dashboards/notes.svg';
import download from '../../public/dashboards/download.svg';
import assignment from '../../public/dashboards/assignment.svg';
import quiz from '../../public/dashboards/quiz.svg';

export default function StudentDashboard() {
  return (
    <div className="w-[1440px] h-[125px] relative">
      <div className="w-[966px] left-[329px] top-[62px] absolute justify-start items-center gap-5 inline-flex">
        <div className="text-[#31363f]/70 text-lg font-normal font-['Mulish']">
          Dashboard
        </div>
        <div className="text-[#31363f]/70 text-lg font-normal font-['Mulish']">
          Lectures
        </div>
        <div className="w-[38px] text-[#31363f]/70 text-lg font-normal font-['Mulish']">
          Files
        </div>
        <div className="text-[#31363f]/70 text-lg font-normal font-['Mulish']">
          Timetable
        </div>
        <div className="text-[#31363f]/70 text-lg font-normal font-['Mulish']">
          Chat
        </div>
      </div>
      <div className="w-[200px] h-[35px] left-[992px] top-[55px] absolute">
        <div className="w-[200px] h-[35px] left-0 top-0 absolute bg-white rounded-[20px] shadow">
          <div className="w-[180px] h-[15px] left-[10px] top-[10px] absolute">
            <div className="left-0 top-[-1px] absolute text-[#757575] text-sm font-normal font-['Mulish']">
              Search...
            </div>
          </div>
        </div>
        <div className="w-[56.69px] h-[35px] left-[143.31px] top-0 absolute bg-[#4e99e9] rounded-[20px] shadow">
          <div className="w-7 h-[15px] left-[14.69px] top-[10px] absolute text-center text-white text-sm font-normal font-['Mulish']">
            Go
          </div>
        </div>
      </div>
      <div className="w-[35.25px] h-9 left-[1214px] top-[54px] absolute">
        <div className="w-[22.50px] h-[30px] left-0 top-[6px] absolute">
          <div className="w-[22.50px] h-[25.50px] left-0 top-[-4.50px] absolute rounded-tl-[15px] rounded-tr-[15px] border-2 border-[#1c82ad]">
            <div className="w-[30px] h-[3.24px] left-[-3.75px] top-[22.50px] absolute bg-[#1c82ad]" />
            <div className="w-[10.50px] h-[3.24px] left-[6px] top-[28.50px] absolute bg-[#1c82ad]" />
          </div>
        </div>
        <div className="w-[18px] h-[18px] left-[17.25px] top-0 absolute bg-[#ff0000] rounded-[9px]">
          <div className="w-[18px] h-[18px] left-0 top-0 absolute text-center text-[#1c82ad] text-[15px] font-normal font-['Roboto']">
            1
          </div>
        </div>
      </div>
      <div className="w-[187px] h-[81px] left-[130px] top-[23px] absolute">
        <a href="/">
          <img
            className="w-[187px] h-[81px] left-0 top-2 absolute"
            src="../public/footer/logo.svg"
          />
        </a>
      </div>
      <div className="w-[571px] top-[150px] left-[130px] h-[314px] relative">
        <div className="w-[571px] left-0 top-0 absolute text-[#1c82ad] text-[40px] font-black font-['Mulish']">
          Welcome to your dashboard!
        </div>
        <a href="#">
          <div className="main-btns-sdash w-[126.50px] h-[89px] left-[2px] top-[88px] absolute bg-[#1c82ad] rounded-[15px]">
            <div className="left-[30px] top-[62px] absolute text-black text-[10px] font-bold font-['Mulish']">
              Lecture Notes
            </div>
            <img
              src={notes}
              alt="Lecture Notes"
              className="w-[34.50px] h-[27.60px] left-[46px] top-[17px] absolute"
            />
          </div>
        </a>
        <a href="#">
          <div className="main-btns-sdash w-[126.50px] h-[89px] left-[159px] top-[88px] absolute bg-[#1c82ad] rounded-[15px]">
            <div className="left-[23px] top-[59.60px] absolute text-black text-[10px] font-bold font-['Mulish']">
              Download Notes
              <img
                src={download}
                alt="Download Notes"
                className="w-[34.50px] h-[27.60px] left-[22px] top-[-40px] absolute"
              />
            </div>
          </div>
        </a>
        <a href="#">
          <div className="main-btns-sdash w-[126.50px] h-[89px] left-[2px] top-[225px] absolute bg-[#1c82ad] rounded-[15px]">
            <div className="left-[41px] top-[60px] absolute text-black text-[9px] font-bold font-['Mulish']">
              Assigment
              <img
                src={assignment}
                alt="Assigment"
                className="w-[34.50px] h-[27.60px] left-[7px] top-[-40px] absolute"
              />
            </div>
          </div>
        </a>
        <a href="#">
          <div className="main-btns-sdash w-[126.50px] h-[89px] left-[159px] top-[225px] absolute bg-[#1c82ad] rounded-[15px]">
            <div className="left-[52px] top-[61px] absolute text-black text-[9px] font-bold font-['Mulish']">
              Quiz
              <img
                src={quiz}
                alt="Quiz"
                className="w-[34.50px] h-[27.60px] left-[-7px] top-[-40px] absolute"
              />
            </div>
          </div>
        </a>
        <div className="w-[250px] h-[132px] left-[305px] top-[88px] absolute bg-[#f1f1f3] rounded-xl shadow">
          <div className="w-[178px] h-6 left-[16px] top-[16px] absolute">
            <div className="p-2.5 left-[-10px] top-[-10px] absolute justify-center items-center gap-2.5 inline-flex">
              <div className="text-black text-xl font-bold font-['Mulish']">
                Announcement
              </div>
            </div>
          </div>
          <div className="w-[250px] h-[132px] left-[16px] top-[55.13px] absolute">
            <div className="left-0 absolute text-[#3c3852] text-sm font-normal font-['Mulish'] text-center">
              Lorem ipsum dolor sit amet
            </div>
            <div className="left-0 top-[15.87px] absolute text-[#3c3852] text-sm font-normal font-['Mulish']">
              consectetur adipisicing elit.
            </div>
          </div>
          <div className="w-[178px] h-[15px] left-[16px] top-[101.20px] absolute">
            <div className="left-0 top-[-1.20px] absolute text-[#6e6b80] text-[12.80px] font-normal font-['Mulish']">
              April 15, 2022
            </div>
          </div>
        </div>
      </div>
      <div className="w-[552px] h-[772px] left-[900px] top-[170px] absolute">
        <div className="w-[543px] h-[138px] left-[9px] top-[467px] absolute bg-white rounded-[20px] border border-[#31363f]/25">
          <div className="w-[493px] h-4 left-[26px] top-[109px] absolute">
            <div className="w-[200px] h-4 left-0 top-0 absolute text-black text-sm font-medium font-['Roboto']">
              135 Works / 45%
            </div>
          </div>
          <div className="left-[26px] top-[18px] absolute text-black text-[32px] font-bold font-['Mulish']">
            HTML
          </div>
          <div className="w-[337px] h-[0px] left-[26px] top-[80px] absolute border border-[#1c82ad]"></div>
        </div>
        <div className="w-[543px] h-[138px] left-[9px] top-[634px] absolute bg-white rounded-[20px] border border-[#31363f]/25">
          <div className="w-[493px] h-4 left-[26px] top-[109px] absolute">
            <div className="w-[200px] h-4 left-0 top-0 absolute text-black text-sm font-medium font-['Roboto']">
              135 Works / 45%
            </div>
          </div>
          <div className="left-[26px] top-[18px] absolute text-black text-[32px] font-bold font-['Mulish']">
            IIT
          </div>
        </div>
        <div className="left-[194px] top-[356px] absolute text-[#336072] text-4xl font-extrabold font-['Mulish']">
          Progress
        </div>
        <div className="w-[250px] h-[143px] left-0 top-[87px] absolute bg-[#85adbe] rounded-[15px]">
          <div className="w-[250px] h-[108px] left-0 top-0 absolute">
            <div className="left-[15px] top-[17px] absolute text-white text-xl font-extrabold font-['Mulish']">
              Green Computing
            </div>
          </div>
          <div className="w-[170px] h-[121.55px] left-[-50px] top-[-57.20px] absolute rounded-[85px] border-8 border-white/5" />
        </div>
        <div className="w-[250px] h-[143px] left-[300px] top-[86px] absolute bg-[#85adbe] rounded-[15px]">
          <div className="w-[250px] h-[108px] left-0 top-0 absolute">
            <div className="left-[15px] top-[17px] absolute text-white text-xl font-extrabold font-['Mulish']">
              Maths
            </div>
          </div>
          <div className="w-[170px] h-[121.55px] left-[-50px] top-[-57.20px] absolute rounded-[85px] border-8 border-white/5" />
        </div>
        <div className="left-[35px] top-0 absolute text-[#336072] text-4xl font-extrabold font-['Mulish']">
          Recently accessed courses
        </div>
      </div>
    </div>
  );
}
