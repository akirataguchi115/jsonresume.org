import Head from 'next/head';

export const metadata = {
  title: 'Schema — JSON Resume',
  description: 'JSON Resume schema',
  image: 'https://jsonresume.org/images/logo.png',
  url: 'https://jsonresume.org/schema/',
};

export default function Schema() {
  return (
    <>
      <Head>
        <title>Schema — JSON Resume</title>
      </Head>
      <header id="header">
        <div class="container">
          <div class="row">
            <div class="col-sm-12">
              <h1>Schema</h1>
            </div>
          </div>
        </div>
      </header>

      <div id="schema" class="container">
        <div class="row">
          <div class="col-md-5">
            <h4>What is it?</h4>
            <p>
              JSON Resume is a community driven open-source initiative to create
              JSON-based standard for resumes.
            </p>
            <h4>Why JSON?</h4>
            <p>
              We believe that the strengths of the JSON format makes it a good
              fit for resumes. It&apos;s lightweight, easy to use and it&apos;s
              perfect to build tools for!
            </p>
            <p>
              We also feel that the{' '}
              <a href="https://json-schema.org/">JSON Schema</a>
              &nbsp;is mature enough for writing usable semantics.
            </p>
            <h4>Open Source</h4>
            <p>
              The schema is{' '}
              <a href="https://github.com/jsonresume/resume-schema">
                open source
              </a>{' '}
              and community-driven. We release everything we do under the MIT
              license.
            </p>
            <hr />
            <p>
              We are also working on a{' '}
              <a href="/job-description-schema">Job Description schema</a>
            </p>
          </div>
          <div class="col-sm-9 col-md-7">
            <div class="header">
              <div class="pull-right version">version 1.0.0</div>
              resume.json
            </div>
            <pre
              class="schema"
              dangerouslySetInnerHTML={{
                __html: `{
  "basics": {
    "name": <span>"John Doe",</span>
    "label": <span>"Programmer",</span>
    "image": <span>"",</span>
    "email": <span>"john@gmail.com",</span>
    "phone": <span>"(912) 555-4321",</span>
    "url": <span>"https://johndoe.com",</span>
    "summary": <span>"A summary of John Doe…",</span>
    "location": {
      "address": <span>"2712 Broadway St",</span>
      "postalCode": <span>"CA 94115",</span>
      "city": <span>"San Francisco",</span>
      "countryCode": <span>"US",</span>
      "region": <span>"California"</span>
    },
    "profiles": [{
      "network": <span>"Twitter",</span>
      "username": <span>"john",</span>
      "url": <span>"https://twitter.com/john"</span>
    }]
  },
  "work": [{
    "name": <span>"Company",</span>
    "position": <span>"President",</span>
    "url": <span>"https://company.com",</span>
    "startDate": <span>"2013-01-01",</span>
    "endDate": <span>"2014-01-01",</span>
    "summary": <span>"Description…",</span>
    "highlights": [
      <span>"Started the company"</span>
    ]
  }],
  "volunteer": [{
    "organization": <span>"Organization",</span>
    "position": <span>"Volunteer",</span>
    "url": <span>"https://organization.com/",</span>
    "startDate": <span>"2012-01-01",</span>
    "endDate": <span>"2013-01-01",</span>
    "summary": <span>"Description…",</span>
    "highlights": [
      <span>"Awarded 'Volunteer of the Month'"</span>
    ]
  }],
  "education": [{
    "institution": <span>"University",</span>
    "url": <span>"https://institution.com/",</span>
    "area": <span>"Software Development",</span>
    "studyType": <span>"Bachelor",</span>
    "startDate": <span>"2011-01-01",</span>
    "endDate": <span>"2013-01-01",</span>
    "score": <span>"4.0",</span>
    "courses": [
      <span>"DB1101 - Basic SQL"</span>
    ]
  }],
  "awards": [{
    "title": <span>"Award",</span>
    "date": <span>"2014-11-01",</span>
    "awarder": <span>"Company",</span>
    "summary": <span>"There is no spoon."</span>
  }],
  "certificates": [{
    "name": <span>"Certificate",</span>
    "date": <span>"2021-11-07",</span>
    "issuer": <span>"Company",</span>
    "url": <span>"https://certificate.com"</span>
  }],
  "publications": [{
    "name": <span>"Publication",</span>
    "publisher": <span>"Company",</span>
    "releaseDate": <span>"2014-10-01",</span>
    "url": <span>"https://publication.com",</span>
    "summary": <span>"Description…"</span>
  }],
  "skills": [{
    "name": <span>"Web Development",</span>
    "level": <span>"Master",</span>
    "keywords": [
      <span>"HTML",</span>
      <span>"CSS",</span>
      <span>"JavaScript"</span>
    ]
  }],
  "languages": [{
    "language": <span>"English",</span>
    "fluency": <span>"Native speaker"</span>
  }],
  "interests": [{
    "name": <span>"Wildlife",</span>
    "keywords": [
      <span>"Ferrets",</span>
      <span>"Unicorns"</span>
    ]
  }],
  "references": [{
    "name": <span>"Jane Doe",</span>
    "reference": <span>"Reference…"</span>
  }],
  "projects": [{
    "name": <span>"Project",</span>
    "startDate": <span>"2019-01-01",</span>
    "endDate": <span>"2021-01-01",</span>
    "description": <span>"Description...",</span>
    "highlights": [
      <span>"Won award at AIHacks 2016"</span>
    ],
    "url": <span>"https://project.com/"</span>
  }]
}
`,
              }}
            ></pre>
          </div>
        </div>
      </div>
    </>
  );
}
