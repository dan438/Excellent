import React from "react";
import MenuList from "../../../components/MenuList";
import { MdContentPaste } from "react-icons/md";
import "./style.css";

function Index() {
  return (
    <div className="main-content">
      <MenuList link="/accounts" />
      {/* option card start */}
      <div className="statement_content mt-1">
        <div>
          <form>
            <p class="my-3">
              {" "}
              You are allowed to create additional savings or current accounts.
              This is limited to 2 sub-accounts for each account.{" "}
            </p>
            <div>
              <div>
                <div>
                  <div>Select Account Type</div>
                  <div>
                    <input type="text" />
                  </div>
                </div>
                <span>
                  <span></span>
                </span>
              </div>
            </div>
            <div>
              <div>
                <input
                  placeholder="Answer to secret Question"
                  type="password"
                />
                <div>
                  <span></span>
                </div>
              </div>
              <div>
                <span>
                  <a> Forgot Secret Question? </a>
                </span>
              </div>
            </div>
            <div>
              <button>
                <span>
                  <span> Submit </span>
                </span>
                <div></div>
                <div></div>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Index;
