import '../components/Student.css';
import notes from '../../public/dashboards/lecture-notes.svg';
import Upload from '../../public/dashboards/upload.svg';
import feedback from '../../public/dashboards/feedback.svg';
import quiz from '../../public/dashboards/quiz.svg';

import Todo from '../components/FacultyTodo';
import FacultyLectures from '../components/FacultyLectures';
import SOSbtn from '../components/SOSbtn';

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
          Quizzes
        </div>
        <div className="text-[#31363f]/70 text-lg font-normal font-['Mulish']">
          Alerts
        </div>
      </div>
      <div className="w-[200px] h-[35px] left-[1000px] top-[55px] absolute">
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
        <a href="/faculty/demo/whiteboard">
          <div className="main-btns-sdash w-[130px] h-[100px] left-[2px] top-[88px] absolute bg-[#1c82ad] rounded-[15px]">
            <div className="left-[30px] top-[62px] absolute text-black text-[12px] font-bold font-['Mulish']">
              Start Lecture
            </div>
            <img
              src={notes}
              alt="Lecture Notes"
              className="w-[34.50px] h-[27.60px] left-[46px] top-[17px] absolute"
            />
          </div>
        </a>
        <a href="#">
          <div className="main-btns-sdash w-[130px] h-[100px] left-[159px] top-[88px] absolute bg-[#1c82ad] rounded-[15px]">
            <div className="left-[23px] top-[59.60px] absolute text-black text-[12px] font-bold font-['Mulish']">
              Upload Notes
              <img
                src={Upload}
                alt="Upload Notes"
                className="w-[34.50px] h-[27.60px] left-[22px] top-[-40px] absolute"
              />
            </div>
          </div>
        </a>
        <a href="#">
          <div className="main-btns-sdash w-[130px] h-[100px] left-[2px] top-[225px] absolute bg-[#1c82ad] rounded-[15px]">
            <div className="left-[25px] top-[60px] absolute text-black text-[12px] font-bold font-['Mulish']">
              View Feedback
              <img
                src={feedback}
                alt="Assigment"
                className="w-[34.50px] h-[27.60px] left-[22px] top-[-40px] absolute"
              />
            </div>
          </div>
        </a>
        <a href="#">
          <div className="main-btns-sdash w-[130px] h-[100px] left-[159px] top-[225px] absolute bg-[#1c82ad] rounded-[15px]">
            <div className="left-[52px] top-[61px] absolute text-black text-[12px] font-bold font-['Mulish']">
              Quiz
              <img
                src={quiz}
                alt="Quiz"
                className="w-[34.50px] h-[27.60px] left-[-7px] top-[-40px] absolute"
              />
            </div>
          </div>
        </a>
      </div>
      <div className="w-[300px] top-[-150px] left-[1000px] h-[314px] relative">
        <p className="text-lg text-center text-[36px] font-bold font-['Mulish'] text-[#1c82ad]">
          To-Do List
        </p>
        <Todo />
      </div>
      <div className="w-[500px] top-[-100px] left-[600px] h-[400px] relative">
        <FacultyLectures />
        <FacultyLectures />
      </div>
      <div className="w-[372px] h-[324px] absolute top-[600px] left-[130px] bg-[#1c82ad] rounded-[30px] shadow" />
      <div className="text-[#336072] text-4xl absolute top-[550px] left-[170px] font-extrabold font-['Mulish'] text-center text-[36px]">
        Timetable
      </div>
      <div className="w-[202px] h-[324px] absolute top-[650px] left-[1250px]">
        <SOSbtn />
      </div>
    </div>
  );
}
