import { h, FunctionComponent, Fragment } from "preact";
import { css, cx } from "emotion";

const breadcrumbWrapperCss = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const breadcrumbCss = css`
  position: relative;
  width: 90%;
  max-width: 420px;
  padding: 20px 0px 30px;
  border-style: solid;
  border-width: 2px;
  border-color: white;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const linkBackWrapperCss = css`
  max-width: 1100px;
  display: flex;
  -webkit-box-orient: horizontal;
  -webkit-box-direction: normal;
  flex-direction: row;
  flex-wrap: wrap;
  -webkit-box-pack: justify;
  justify-content: space-between;
  margin: 0px auto;
  width: 100%;
  padding: 0px 12px 30px;
`;

const linkBackCss = css`
  color: rgb(241, 91, 42);
  font-weight: 700;
  cursor: pointer;
  text-decoration: none;
  font-size: 11px;
  padding-top: 3px;
`;

const Breadcrumb: FunctionComponent = () => (
  <Fragment>
    <div className={breadcrumbWrapperCss}>
      <div className={breadcrumbCss}>
        <span>Breadcrumb</span>
      </div>
    </div>
    <div className={linkBackWrapperCss}>
      <a className={linkBackCss}>{"< Back to Pricing"}</a>
    </div>
  </Fragment>
);

export default Breadcrumb;
