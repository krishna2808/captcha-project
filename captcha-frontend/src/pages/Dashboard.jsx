// Dashboard.js
import React, { useState, useEffect ,useContext} from "react";
import FunnyNumberDisplay from "../components/CaptchaComp";
import { BsCheckCircle } from "react-icons/bs";
import { AiOutlineCloseCircle } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { TbPhotoCheck } from "react-icons/tb";
import { axiosInstance } from "../utils/fetchUtitls";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../Contexts/UserContext";

const InfoBar = () => {
  return (
    <div className="info-bar">
      <BsInfoCircle size={30} color="#000000" className="info-icon" />
      <div className="info-text">
        <span>
          Welcome to 99Captcha
          <br />
          Here you can earn money entering text from images, but first you have
          to complete the training. It's fast and easy.
          <br />
          You see the image that contains text <b>8950</b>, just enter this text
          and click <b>Send</b>.
        </span>
      </div>
    </div>
  );
};

const Dashboard = () => {
  const navigate = useNavigate();
  const {} = useContext(UserContext)
  const [inputValue, setInputValue] = useState("");
  const [randmVal,setRandmVal] = useState(0)
  const [userName, setUserName] = useState("");
  const [dashboardData,setDashboardData ] = useState(null)
  const [popupOpen, setPopupOpen] = useState(false);
  const [popupErrors, setPopupErrors] = useState({ type: "error", msg: null });
  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setPopupOpen(false);
  };
  useEffect(() => {
  const randomSixDigitNumber = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  setRandmVal(randomSixDigitNumber)
    // this will executed everytime Dashboard is loaded , or a dependent variable is changed
    // we can check if user have a active plan , if not redirect to a Waiting page or anything like this
    axiosInstance
      .get("/api/check-if-enroll", {})
      .then((res) => {
        const data = res.data;
        debugger;
        const is_having_plan = data.is_having_plan;
        if (is_having_plan) {
          const is_plan_activated = data.is_plan_activated;
          if (is_plan_activated) {
            const captchaLimit = data.planData.captcha_limit;
            const captcahsFilled = data.planData.captchas_filled;

            if (captcahsFilled >= captchaLimit) {
              // you cannot fill more captchas and should be redirected to waiting page where in future can show plan upgrade option
              navigate("/wait-for-limit");
            } else {
              console.log("congrats you can play you game today!");
              console.log({"dashboard data":data});
              setDashboardData(
                {
                  planData:data.planData,
                  userData:data.userData
                }
              )
            }
          } else {
            // plan not activated hence navigate to waiting area with a flag of plan not activated
            navigate("/wait-for-activation");
          }
        } else {
          //  not having a plan hence navigating to Plans page
          alert("Select a plan first")
          navigate("/plans");
        }
        debugger
        setUserName(data.userData.member_id);
      })
      .catch((err) => {
        console.log({ err });
        setPopupErrors({
          type: "error",
          msg: "Something Went Wrong Please Try Refreshing The Page",
        });

        if (err.response && err.response.status === 401) {
          // Handle 401 Unauthorized error
          console.log('Unauthorized: Redirect or show login page');
          navigate("/signin")
        }

      });
  }, [userName]);
  const handleReloadClick = () => {
    // Add your reload logic here
    // For example, you can reset the input value
    setInputValue("");
  };

  const handleSubmitClick = () => {
    // Add your submit logic here
    // For example, you can perform an action with the input value
    console.log("Submitted:", inputValue);
    console.log({"captcha value":randmVal});
    const is_submission_ok = (inputValue === String(randmVal)) ? true:false
    axiosInstance.post("api/submit-captcha/",{
      is_submission_ok,
    })
    .then((data)=>{
      // now with succesful submission i want to refresh the page so that it will refresh all values of user and plan
      console.log({"success response ":data});
      window.location.reload() // this get's the job done

    })
    .catch((err)=>{
      alert(err)
      console.log({"captcha submission error":err});
    })
  };

  return (
    <div className="dashboard">
      <div className="dashbaord-points-bar">
        <div className="ds-points-bar-left">
          <TbPhotoCheck
            className="btn-count-caps"
            style={{ color: "white", fontSize: "40", marginLeft: "40px" }}
          />
          <span>CAPTCHAs entered-</span>
          {dashboardData?dashboardData.planData.captchas_filled:0}/{dashboardData?dashboardData.planData.captcha_limit:""}
        </div>
        <div className="ds-points-bar-right">
          <p style={{ marginRight: "20px" }}>{userName}</p>
          <p
            className="user-email"
            style={{ marginLeft: "20px", marginRight: "20px" }}
          >
            {dashboardData?dashboardData.userData.phone_number:"User-email"}
          </p>
        </div>
      </div>
      <div className="dasboard-main-menu">
        <InfoBar />
        <div className="captcha-number-wrapper">
          <FunnyNumberDisplay number={randmVal} />
        </div>
        <div className="dashboard-input-div">
          <input
            className="captcha-input"
            type="text"
            placeholder="Enter captcha value here"
            // value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />

          <br />
          <div className="dashboard-button-box">
            <button
              className="btn-reload-dashboard"
              onClick={handleReloadClick}
            >
              <AiOutlineCloseCircle size={20} style={{ marginRight: "5px" }} />
              Cannot solve
            </button>
            <button
              className="btn-submit-dashboard"
              onClick={handleSubmitClick}
            >
              <BsCheckCircle size={20} style={{ marginRight: "5px" }} />
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
