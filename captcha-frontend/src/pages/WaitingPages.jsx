import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosInstance } from "../utils/fetchUtitls";
import { BsInfoCircle } from "react-icons/bs";

const InfoBar = ({ plan, is_activation_issue = false }) => {
  if (is_activation_issue) {
    return (
      <div className="waiting-info-bar">
        <BsInfoCircle size={30} color="#000000" className="info-icon" />
        <div className="info-text">
          <span>
            <br />
            Thank you for your payment or plan application! Our team will
            confirm the transaction, and once verified, your plan will be
            activated. Please allow some time for the process to complete. You
            will receive a notification once your plan{" "}
            <b style={{ color: "red", margin: "0px 5px" }}>{plan?plan.name:""}</b>is
            active.
            <br />
            <br />
            Try after sometime
            <Link className="btn-link" to={"/dashboard"}>
              Dashboard
            </Link>
            .
          </span>
        </div>
      </div>
    );
  } else {
    // for limit is full error notification
    return (
      <div className="waiting-info-bar">
        <BsInfoCircle size={30} color="#000000" className="info-icon" />
        <div className="info-text">
          <span>
            <br />
            Your daily captcha filling limit has been met. Please try again
            after tomorrow when the limit is refreshed. Thank you for your
            understanding!
            <br />
            Captcha filled {plan ? plan.captchas_filled : 0} /{" "}
            {plan ? plan.captcha_limit : 0}
            <br />
            Try again tomorrow
            <Link className="btn-link" to={"/dashboard"}>
              Dashboard
            </Link>
            .
          </span>
        </div>
      </div>
    );
  }
};

const PlanWaitPage = () => {
  const [planData, setPlanData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/api/check-if-enroll", {})
      .then((data) => {
        console.log(data);
        debugger;
        if (!data.data.is_having_plan) {
          navigate("/plans");
        }
        if (data.data.is_plan_activated) {
          navigate("/dashboard");
        } else {
          setPlanData(data.data);
        }
        console.log(
          "Looks like your plan is not activated ! Wait till our team confirm your payment transaction "
        );
      })
      .catch((error) => {
        // redirect to signin if found 401 Unauthorized!
        if (error.response && error.response.status === 401) {
          navigate("/signin");
        }
      });
  }, []);

  return (
    <div>
      <InfoBar
        is_activation_issue={true}
        plan={planData ? planData.planData : null}
      />
    </div>
  );
};
const LimitCrossWaitPage = () => {
  const [planData, setPlanData] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    axiosInstance
      .get("/api/check-if-enroll", {})
      .then((data) => {
        console.log(data);
        debugger;
        if (!data.data.is_having_plan) {
          navigate("/plans");
        }
        if (data.data.is_plan_activated && (data.data.planData.captchas_filled < data.data.planData.captcha_limit)) {
          navigate("/dashboard");
        } else {
            setPlanData(data.data);
        }
        console.log(
          "Looks like your plan is not activated ! Wait till our team confirm your payment transaction "
        );
      })
      .catch((error) => {
        // redirect to signin if found 401 Unauthorized!
        if (error.response && error.response.status === 401) {
          navigate("/signin");
        }
      });
  }, []);
  return (
    <div>
      <InfoBar
        is_activation_issue={false}
        plan={planData ? planData.planData : null}
      />
    </div>
  );
};
export { PlanWaitPage, LimitCrossWaitPage };
