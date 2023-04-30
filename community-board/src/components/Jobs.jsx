import React from "react";
import JobDetail from "./JobDetail";
import Apply from "./Apply";

const Jobs = () => {
    return (
        <div className="container">
            <div className="Job-card">
                <JobDetail company='Peraton' title='Software Engineer' type='Fulltime' place='Annapolis Juntction, MD' />
                <div className="flexible"></div>
                <Apply address='https://careers-peraton.icims.com/jobs/search?ss=1&notFound=1&mobile=false&width=1210&height=500&bga=true&needsRedirect=false&jan1offset=-480&jun1offset=-420' />
            </div>
            <div className="Job-card">
                <JobDetail company='Corelogic Solutions LLC' title='Software Engineer' type='Internship' place='Irvine, CA' />
                <div className="flexible"></div>
                <Apply address='https://corelogic.wd5.myworkdayjobs.com/USCAN/job/Irvine-CA/Intern--Software-Engineer_REQ11602?source=Linkedin' />
            </div>
            <div className="Job-card">
                <JobDetail company='Rakuten Americas' title='Software Engineer - Intern' type='Internship' place='San Mateo, CA' />
                <div className="flexible"></div>
                <Apply address='https://rakuten.wd1.myworkdayjobs.com/RakutenAmericas/job/San-Mateo-California/Software-Engineer---Intern_1017683-1' />
            </div>
            <div className="Job-card">
                <JobDetail company='Visa' title='Software Engineer' type='Internship' place='Austin, TX' />
                <div className="flexible"></div>
                <Apply address='https://jobs.smartrecruiters.com/Visa/743999892300868-intern-software-engineer-undergrad-austin-tx?source=LinkedIn' />
            </div>
            <div className="Job-card">
                <JobDetail company='Tencent America' title='Frontend Developer' type='Internship' place='Palo Alto' />
                <div className="flexible"></div>
                <Apply address='https://www.linkedin.com/jobs/frontend-developer-jobs?trk=expired_jd_redirect&position=1&pageNum=0' />
            </div>
            <div className="Job-card">
                <JobDetail company='S&P Global Market Intelligence' title='Software Engineer' type='Internship' place='New York, NY' />
                <div className="flexible"></div>
                <Apply address='https://careers.spglobal.com/jobs/283429?lang=en-us&utm_source=linkedin' />
            </div>
            <div className="Job-card">
                <JobDetail company='Fortinet Inc' title='Software Development Intern' type='Internship' place='Sunnyvale, CA' />
                <div className="flexible"></div>
                <Apply address='https://edel.fa.us2.oraclecloud.com/hcmUI/CandidateExperience/en/sites/CX/job/13437?utm_medium=jobshare' />
            </div>
            <div className="Job-card">
                <JobDetail company='Walt Disney World' title='Software Developers Engineers' type='Internship' place='Orlando, FL' />
                <div className="flexible"></div>
                <Apply address='https://jobs.disneycareers.com/job/-/-/391/46265542256' />
            </div>
            <div className="Job-card">
                <JobDetail company='U.S.Bank' title='Software Engineering Co-Op' type='Internship' place='Cincinati, OH' />
                <div className="flexible"></div>
                <Apply address='https://careers.usbank.com/global/en/job/UBNAGLOBAL20230007621EXTERNALENGLOBAL/Software-Engineering-Co-Op-Fall-2023?utm_source=linkedin&utm_medium=phenom-feeds' />
            </div>
            <div className="Job-card">
                <JobDetail company='Mphasis' title='Java fullstack Developer' type='Full-time' place='Atlanta, GA' />
                <div className="flexible"></div>
                <Apply address='https://www.linkedin.com/jobs/full-stack-engineer-jobs?trk=expired_jd_redirect&position=1&pageNum=0' />
            </div>

        </div>

    )
};

export default Jobs;