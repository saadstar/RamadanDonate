import React from 'react'
import "./home.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import HomeIcon from '@mui/icons-material/Home';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import OpacityIcon from '@mui/icons-material/Opacity';
import CheckIcon from '@mui/icons-material/Check';


export const Home = () => {
  return (
      <main className='home'>
          {/* Hero Section  */}
        <section className="hero" >
        <div className="homeContainer">
          <p className="section-subtitle">
            <span>مرحبا بك معنا</span>
            <img src="/subtitle-img-white.png" width="32" height="7" alt="Wavy line"/>
          </p>
          <h2 className="h1 hero-title">
       مساهمتك تُحسن <strong>حياة الآخرين  </strong>
          </h2>

          <p className="hero-text">
           هدف الفريق المؤسس نشر التطوع و الايجابية في المجتمع حيث يُعد التطوع أساسًا لبناء مجتمع متماسك ومتعاون. من خلال مبادرتنا في توزيع كراتين رمضان، نعمل مع المتطوعين لنصل إلى الأسر المحتاجة وننشر الأمل في قلوبهم.
          </p>

          <button className="btn btn-primary">
            <span>ساهم معنا</span>
            <FavoriteBorderIcon/>
          </button>

        </div>
      </section>

          {/* Features section  */}
            <section className="section features">
        <div className="container">

          <ul className="features-list">

            <li className="features-item">
              <div className="item-icon">
                <HomeIcon/>
              </div>
              <div>
                <h3 className="h4 item-title">نوفر المأوي</h3>

                <p className="item-text">
                 نوفر المأوى الآمن والمريح للجميع، مع ضمان الجودة والخدمات التي تلبي احتياجاتكم.
                </p>
              </div>
            </li>

            <li className="features-item">
              <div className="item-icon">
                <FastfoodIcon/>
              </div>

              <div>
                <h3 className="h4 item-title">نوفر الطعام</h3>

                <p className="item-text">
              نوفر الطعام الصحي والمتنوع بجودة عالية، لتلبية احتياجاتكم وضمان رضاكم الكامل.
                </p>
              </div>
            </li>

            <li className="features-item">
              <div className="item-icon">
                <OpacityIcon/>
              </div>

              <div>
                <h3 className="h4 item-title">نوفر المياه</h3>

                <p className="item-text">
                 نوفر المياه النقية والعذبة بأعلى معايير الجودة، لضمان صحة وسلامة الجميع.
                </p>
              </div>
            </li>

            <li className="features-item">
              <div className="item-icon">
                <FavoriteBorderIcon/>
              </div>

              <div>
                <h3 className="h4 item-title">نوفر الحب</h3>

                <p className="item-text">
                 نوفر الحب والدعم بكل صدق وإخلاص، لننشر السعادة ونبني علاقات قوية ومستدامة.
                </p>
              </div>
            </li>

          </ul>

        </div>
      </section>

      {/* About section  */}      
      <section className="section about">
        <div className="container">
          <div className="about-banner">
            <h2 className="deco-title">من نحن؟</h2>
            <img src="./deco-img.png" width="58" height="261" alt="" className="deco-img"/>
            <div className="banner-row">
              <div className="banner-col">
                <img src="./whowe1.png" width="315" height="380" loading="lazy" alt="Tiger"
                  className="about-img w-100"/>

                <img src="./whowe3.png" width="386" height="250" loading="lazy" alt="Panda"
                  className="about-img about-img-2 w-100"/>
              </div>

              <div className="banner-col">
                <img src="./whowe7.png" width="250" height="277" loading="lazy" alt="Elephant"
                  className="about-img about-img-3 w-100"/>

                <img src="./whowe5.png" width="315" height="380" loading="lazy" alt="Deer"
                  className="about-img w-100"/>
              </div>

            </div>

          </div>

          <div className="about-content">

            <p className="section-subtitle">
              <img src="./subtitle-img-green.png" width="32" height="7" alt="Wavy line"/>

              <span>لماذا نحن؟</span>
            </p>

            <h2 className="h2 section-title">
              تواصل معنا <strong>لمعرفه المزيد</strong>
            </h2>

            <ul className="tab-nav">

              <li>
                <button className="tab-btn active">مهمتنا</button>
              </li>

              <li>
                <button className="tab-btn">رؤيتنا</button>
              </li>

              <li>
                <button className="tab-btn">خطتنا</button>
              </li>

            </ul>

            <div className="tab-content">

              <p className="section-text">            
 مهمتنا هي توفير بيئة داعمة وآمنة تلبي احتياجات الجميع، سواء من خلال توفير المأوى، الطعام، المياه، <br/>أو الحب، لنساهم في تحسين جودة الحياة وبناء مجتمع أكثر ترابطًا وإنسانية
              </p>

              <ul className="tab-list">

                <li className="tab-item">
                  <div className="item-icon">
                    <CheckIcon/>
                  </div>

                  <p className="tab-text">الخير في الطعام</p>
                </li>

                <li className="tab-item">
                  <div className="item-icon">
                    <CheckIcon/>
                  </div>

                  <p className="tab-text">الخير في التعليم</p>
                </li>

                <li className="tab-item">
                  <div className="item-icon">
                    <CheckIcon/>
                  </div>

                  <p className="tab-text">الخير في المياه</p>
                </li>

                <li className="tab-item">
                  <div className="item-icon">
                    <CheckIcon/>
                  </div>

                  <p className="tab-text">الخير في العلاج</p>
                </li>

              </ul>

              <button className="btn btn-secondary">
                <span>اكتشف المزيد...</span>

                <FavoriteBorderIcon/>
              </button>

            </div>

          </div>

        </div>
      </section>

      {/* Testmonials  */}
       <section className="testi">    
        <div className="testi-content">
          <p className="section-subtitle">
            <img src="./subtitle-img-green.png" width="32" height="7" alt="Wavy line"/>

            <span>مديرينا</span>
          </p>

          <h2 className="h2 section-title">
          كلمه مدير  <strong>منظمتنا</strong>
          </h2>

          <div className="testi-card">

            <figure className="card-avatar">
              <img src="./ahmed.png" width="80" height="80" loading="lazy" alt="ahmed mosa"style={{borderRadius:"50%",objectFit:"cover"}} />
            </figure>

            <div>
              <blockquote className="testi-text">
              هدفنا الاستراتيجي هو توزيع الطعام والمواد الغذائية بشكل مستدام ومنظم للمساهمة في القضاء على ظاهرة الجوع وتعزيز الأمن الغذائي للمجتمعات الأكثر احتياجًا. نسعى إلى تلبية الاحتياجات الأساسية للأسر المحتاجة، مع التركيز على تقديم دعم عالي الجودة يحقق أثراً إيجابياً ومستداماً. كما نلتزم بتعزيز قيم التكافل والمسؤولية الاجتماعية، وبناء شراكات قوية تسهم في تحسين جودة الحياة ودعم التنمية المجتمعية الشاملة.
              </blockquote>

              <h3 className="testi-name">المهندس أحمد موسي</h3>

              <p className="testi-title">مؤسس المنظومه</p>
            </div>

          </div>

        </div>

        <figure className="testi-banner">
          <img src="./testi-banner.jpg" width="600" height="750" loading="lazy" alt="Rhinoceros"
            className="img-cover"style={{objectFit:"cover"}}/>
        </figure>

      </section>

      {/* partner  */}
        <section className="partner">
        <div className="container">
          <a href="#" className="partner-logo">
            <img src="./partner-1.png" width="157" height="55" loading="lazy" alt="Children Fund"
              className="gray"/>
            <img src="./partner-1-active.png" width="157" height="55" loading="lazy" alt="Children Fund"
              className="color"/>
          </a>

          <a href="#" className="partner-logo">
            <img src="./partner-2.png" width="163" height="55" loading="lazy" alt="Non Profit Agency"
              className="gray"/>

            <img src="./partner-2-active.png" width="163" height="55" loading="lazy"
              alt="Non Profit Agency" className="color"/>
          </a>

          <a href="#" className="partner-logo">
            <img src="./partner-3.png" width="149" height="55" loading="lazy" alt="Rise Hand Help Us"
              className="gray"/>

            <img src="./partner-3-active.png" width="149" height="55" loading="lazy"
              alt="Rise Hand Help Us" className="color"/>
          </a>

          <a href="#" className="partner-logo">
            <img src="./partner-4.png" width="169" height="58" loading="lazy" alt="Helping" className="gray"/>

            <img src="./partner-4-active.png" width="169" height="58" loading="lazy" alt="Helping"
              className="color"/>
          </a>

          <a href="#" className="partner-logo">
            <img src="./partner-5.png" width="211" height="55" loading="lazy" alt="Poor Fund Organization"
              className="gray"/>

            <img src="./partner-5-active.png" width="211" height="55" loading="lazy"
              alt="Poor Fund Organization" className="color"/>
          </a>

        </div>
      </section>
    </main>
  )
}
