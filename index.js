import React, { Component } from 'react'

export default class Resume extends Component {
  render () {
    return (
      <div className='resume-container'>
        <nav className='navbar navbar-default navbar-fixed-top resume-nav'>
          <div className='container-fluid'>
            <div className='navbar-header'>
              <button type='button' className='navbar-toggle collapsed' data-toggle='collapse' data-target='#bs-example-navbar-collapse-1' aria-expanded='false'>
                <span className='sr-only'>Toggle navigation</span>
                <span className='icon-bar' />
                <span className='icon-bar' />
                <span className='icon-bar' />
              </button>
              <a className='navbar-brand test' href='#'>RESUME-ZHAO FEI</a>
            </div>

            <div className='collapse navbar-collapse' id='bs-example-navbar-collapse-1'>
              <ul className='nav navbar-nav navbar-right'>
                <li><a href='#Home'>Home</a></li>
                <li><a href='#Projects'>Projects</a></li>
                <li><a href='#Experience'>Experience</a></li>
                <li><a href='#Contact'>Contact</a></li>
              </ul>
            </div>
          </div>
        </nav>
        <section className='home-section' id='Home'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12 col-md-4'>
                <div id='profile'>
                  <img className='portrait' src={require('../css/images/cat.png')} />
                  <div className='portrait-title'>
                    <h2>Zhao Fei</h2>
                    <h3>iOS Developer</h3>
                  </div>
                  <ul className='social-icon' aria-hidden='true'>
                    <li>
                      <a href='mailto:zhaofeizlj@163.com' target='_blank'>
                        <i className='fa fa-envelope big-icon' />
                      </a>
                    </li>
                    <li>
                      <a href='http://twitter.com/fei_zhao_fei' target='_blank'>
                        <i className='fa fa-twitter big-icon' />
                      </a>
                    </li>
                    <li>
                      <a href='https://github.com/ZhaoFeiK' target='_blank'>
                        <i className='fa fa-github big-icon' />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className='col-xs-12 col-md-8'>
                <h1 id='summary'>Summary</h1>
                <p>Zhao Fei is a professional developer who focuses on iOS now. He has strong knowledge of Swift, Objective-C and network programming. With these skills, he created quite a few widely used applications and frameworks.</p>
                <div className='row'>
                  <div className='col-sm-5'>
                    <h3>Interests</h3>
                    <ul className='ul-interests'>
                      <li>Mobile Development</li>
                      <li>Swift Programming</li>
                      <li>React, React-native Programming</li>
                    </ul>
                  </div>
                  <div className='col-sm-7'>
                    <h3>Education</h3>
                    <ul className='ul-edu fa-ul'>
                      <li>
                        <i className='fa-li fa fa-graduation-cap' />
                        <div className='description'>
                          <p className='course'>Inner Mongolia Agriculture University, China, 2014</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id='projects' className='home-section'>
          <div className='container'>

            <div className='row'>
              <div className='col-xs-12 col-md-4 section-heading'>
                <h1>Projects</h1>

              </div>
              <div className='col-xs-12 col-md-8'>

                <div className='project-toolbar'>
                  <div id='filters'>
                    <div className='btn-toolbar'>
                      <div className='btn-group'>

                        <a href='#' data-filter='*' className='btn btn-primary btn-large'>All</a>

                        <a href='#' data-filter='.deep-learning' className='btn btn-primary btn-large'>Deep Learning</a>

                        <a href='#' data-filter='.demo' className='btn btn-primary btn-large active'>Other</a>

                      </div>
                    </div>
                  </div>
                </div>

                <div id='container-projects' className='row isotope' style={{position: 'relative', height: '579px'}}>

                  <div className='col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope-item deep-learning' style={{position: 'absolute', left: '0px', top: '0px', display: 'none'}}>
                    <div className='card'>

                      <a href='https://sourcethemes.com/academic/project/deep-learning/' title='' className='card-image hover-overlay'>
                        <img src='/academic/img/bubbles.jpg' alt='' className='img-responsive' />
                      </a>

                      <div className='card-text'>
                        <h4><a href='https://sourcethemes.com/academic/project/deep-learning/'>Deep Learning</a></h4>
                        <div className='card-desription'>
                          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-xs-12 col-sm-6 col-md-4 col-lg-6 project-item isotope-item demo' style={{position: 'absolute', left: '0px', top: '0px'}}>
                    <div className='card'>

                      <a href='http://example.org' title='' className='card-image hover-overlay' target='_blank'>
                        <img src='/academic/img/boards.jpg' alt='' className='img-responsive' />
                      </a>

                      <div className='card-text'>
                        <h4><a href='http://example.org' target='_blank'>External Project</a></h4>
                        <div className='card-desription'>
                          <p>An example of linking directly to an external project website using <code>external_link</code>.</p>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </section>

        <section id='Experience' className='home-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12 col-md-4 section-heading'>
                <h1>职业经历</h1>
              </div>
              <div className='col-xs-12 col-md-8'>
                <h3>2016 年 1 月 ~ 2017 年 3 月</h3>
                <p><a href='https://www.kelingkeling.com' target='_blank'>Melotic Inc.</a> 软件工程师 (北京)</p>
                <ul>
                  <li>iOS 应用开发</li>
                  <li>React webApp开发</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id='Contact' className='home-section'>
          <div className='container'>
            <div className='row'>
              <div className='col-xs-12 col-md-4 section-heading'>
                <h1>联系</h1>
              </div>
              <div className='col-xs-12 col-md-8'>
                <ul className='fa-ul'>
                  <li>
                    <i className='fa-li fa fa-envelope fa-2x' aria-hidden='true' />
                    <span><a href='mailto:zhaofeizlj@163.com'>zhaofeizlj@163.com</a></span>
                  </li>
                  <li>
                    <i className='fa-li fa fa-map-marker fa-2x' aria-hidden='true' />
                    <span>北京市, 石景山区</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <footer className='site-footer'>
          <div className='container'>
            <p className='powered-by'>
              © 2017 Zhao Fei ·
              Powered by the <a href='https://github.com/gcushen/hugo-academic' target='_blank'>Academic
              theme</a> for <a href='http://gohugo.io' target='_blank'>Hugo</a>.
              <span className='pull-right' aria-hidden='true'>
                <a href='#' id='back_to_top'>
                  <span className='button_icon'>
                    <i className='fa fa-chevron-up fa-2x' />
                  </span>
                </a>
              </span>
            </p>
          </div>
        </footer>

      </div>
    )
  }
}
