import { useNavigate } from "react-router-dom";

function Fitness() {
  const navigate = useNavigate();
  return (
    <div className="fitBG">
      <div className="fitText">
        <h1>WHY YOU SHOULD TRY GROUP FITNESS CLASSES</h1>
        <br />
        <p>
          If you’ve ever taken a LES MILLS BODYPUMP, Zumba or boot camp class,
          you’ve tried group fitness. The term group fitness encompasses any and
          all form of fitness that’s done in a group setting, lead by a personal
          trainer or group instructor. With this form of exercise growing in
          popularity, you can now find group fitness classes of nearly any kind,
          both aerobic- and strength-based.
          <br />
          <br />
          Many gyms offer a whole schedule of group fitness classes, such as LES
          MILLS workouts, that include strength training, core, cardio and
          cycling. Moreover, many boutique studios are built on the group
          fitness model, with proprietary classes and programs that differ from
          those in a larger gym setting. You may be familiar with some of these
          formats, including barre, indoor cycling, and indoor rowing.
          <br />
          <br />
          If you’ve never taken a group fitness class, then you’ve likely never
          experienced the many benefits, including extra motivation and friendly
          competition. Learn more before trying a group fitness class at your
          gym or signing up with a local studio.
        </p>
        <div className="minpic">
          <div>
            <img src="images/fitness/1.jpg" />
          </div>
          <div>
            <img src="images/fitness/2.jpg" />
          </div>
          <div>
            <img src="images/fitness/3.jpg" />
          </div>
          <div>
            <img src="images/fitness/4.jpg" />
          </div>
        </div>
        <h2 className="H1_2">
          For buy group tranings pakage ,please see price list
        </h2>
        <button className="butt"
        onClick={() => {
          navigate('/pricelist')
        }}>
          <span className="text">Enter</span>
          <i className="ri-check-line icon"></i>
        </button>
        <div className="minpic">
          <div>
            <img src="images/fitness/5.jpg" />
          </div>
          <div>
            <img src="images/fitness/6.jpg" />
          </div>
          <div>
            <img src="images/fitness/7.jpg" />
          </div>
          <div>
            <img src="images/fitness/8.jpg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fitness;
