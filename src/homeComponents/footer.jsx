import React, {Component} from 'react';
import GitHubButton from 'react-github-btn'
import "./style.css";
class Footer extends Component {
    render() {
        return (
            <footer class="page-footer font-small special-color-dark pt-4 ">

                <div className='flex-wrap' style={{textAlign:"center"}}>
                    <div className='m-2'><GitHubButton href="https://github.com/iamsurajchahar" data-show-count="true" aria-label="Follow @iamsurajchahar on GitHub">Follow @iamsurajchahar</GitHubButton></div>
                    <GitHubButton href="https://github.com/iamsurajchahar/Algorithm_Visualizer" data-icon="octicon-star" data-show-count="true">Star</GitHubButton>
                    &nbsp
                    <GitHubButton href="https://github.com/iamsurajchahar/Algorithm_Visualizer/fork" data-icon="octicon-repo-forked" data-show-count="true">Fork</GitHubButton>
                    &nbsp
                </div>

                <div class="footer-copyright text-center py-3">© 2020 Copyright:
                    <a href="https://github.com/iamsurajchahar" style={{color: "#65b6f0"}}>Suraj Singh Chahar</a>
                </div>

            </footer>
        );
    }
}

export default Footer;