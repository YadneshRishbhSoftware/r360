import React from 'react'
import logo from "../assets/images/logo.svg";
import logo_sm from "../assets/images/logo-sm.svg";
import Lite from "../assets/images/R-360Lite.svg"
import { Link, useNavigate } from 'react-router-dom';

function Login() {
    const navigate = useNavigate();
    return (
        <>
            <body class="app">
                <section class="login-content">
                    <div class="login-content-lt">
                        <div class="logo"><img src={logo} alt="Rishabh Software" /></div>
                        <div class="logo-sm"><img src={logo_sm} alt="Rishabh Software" /></div>
                    </div>
                    <div class="login-content-rt">
                        <div class="login-box">
                            <form class="login-form" action="#">
                                <img src={Lite} alt="R-360 Lite" class="r360-logo" />
                                <h3 class="login-head">Login</h3>
                                <p class="login-text">Enter the details below to continue.</p>
                                <div class="form-group">
                                    <label class="control-label">Employee ID</label>
                                    <div class="input-addon">
                                        <input class="form-control" type="text" placeholder="2451" autofocus />
                                        <div class="icon-before"><i class="icon-user"></i></div>
                                        <div class="icon-after icon-green"><i class="icon-check"></i></div>
                                    </div>
                                    {/* <!-- <div class="error-block">Error display here</div> --> */}
                                </div>
                                <div class="form-group">
                                    <label class="control-label">Password<span class="extric">*</span></label>
                                    <div class="input-addon">
                                        <input id="password-field" class="form-control" type="password" value="Password" />
                                        <div class="icon-before"><i class="icon-lock"></i></div>
                                        <span toggle="#password-field" class="icon-eye-close field-icon toggle-password"></span>
                                    </div>
                                </div>
                                <div class="form-group">
                                    <div class="utility">
                                        <p><Link to="/forgotpassword" class="form-link">Forgot Password?</Link></p>
                                    </div>
                                </div>
                                <div class="form-group btn-container">
                                    <button class="btn btn-primary" onClick={() => navigate('/calender')}>Login</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </section>

                {/* <script>
                    $(".toggle-password").click(function() {
                
                $(this).toggleClass("icon-eye-close icon-eye-open");
                var input = $($(this).attr("toggle"));
                if (input.attr("type") == "password") {
                    input.attr("type", "text");
                } else {
                    input.attr("type", "password");
                }
                });
                    </script> */}

            </body>
        </>
    )
}

export default Login