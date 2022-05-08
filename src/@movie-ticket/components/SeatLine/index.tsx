import React, { FC } from "react";
import ChairIcon from "@mui/icons-material/Chair";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import { Checkbox } from "@mui/material";
const SeatLine: FC<{
  lineCode: string;
  setFieldValue: any;
  values: any;
  name: string;
  nameProcess: string;
}> = ({ lineCode, setFieldValue, values, name, nameProcess }): JSX.Element => {
  return (
    <ul className="seat--area">
      <li className="front-seat">
        <ul>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][0] ? "booked-seat" : null
              }`}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][0]}
              // checked={true}
              disabled={values[nameProcess][0]}
              onChange={(e) => {
                setFieldValue(`${name}[0]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][1] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][1]}
              disabled={values[nameProcess][1]}
              onChange={(e) => {
                setFieldValue(`${name}[1]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][2] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][2]}
              disabled={values[nameProcess][2]}
              onChange={(e) => {
                setFieldValue(`${name}[2]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][3] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][3]}
              disabled={values[nameProcess][3]}
              onChange={(e) => {
                setFieldValue(`${name}[3]`, e.target.checked);
              }}
            />
          </li>
        </ul>
      </li>

      <li className="front-seat">
        <ul>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][4] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][4]}
              disabled={values[nameProcess][4]}
              onChange={(e) => {
                setFieldValue(`${name}[4]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][5] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][5]}
              disabled={values[nameProcess][5]}
              onChange={(e) => {
                setFieldValue(`${name}[5]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][6] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][6]}
              disabled={values[nameProcess][6]}
              onChange={(e) => {
                setFieldValue(`${name}[6]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][7] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][7]}
              disabled={values[nameProcess][7]}
              onChange={(e) => {
                setFieldValue(`${name}[7]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][8] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][8]}
              disabled={values[nameProcess][8]}
              onChange={(e) => {
                setFieldValue(`${name}[8]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][9] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][9]}
              disabled={values[nameProcess][9]}
              onChange={(e) => {
                setFieldValue(`${name}[9]`, e.target.checked);
              }}
            />
          </li>
        </ul>
      </li>

      <li className="front-seat">
        <ul>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][10] ? "booked-seat" : null
              }`}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][10]}
              disabled={values[nameProcess][10]}
              onChange={(e) => {
                setFieldValue(`${name}[10]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][11] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][11]}
              disabled={values[nameProcess][11]}
              onChange={(e) => {
                setFieldValue(`${name}[11]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][12] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][12]}
              disabled={values[nameProcess][12]}
              onChange={(e) => {
                setFieldValue(`${name}[12]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              className={`chair ${
                values[nameProcess][13] ? "booked-seat" : null
              }`}
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][13]}
              disabled={values[nameProcess][13]}
              onChange={(e) => {
                setFieldValue(`${name}[13]`, e.target.checked);
              }}
            />
          </li>
        </ul>
      </li>
    </ul>
  );
};
export default SeatLine;
