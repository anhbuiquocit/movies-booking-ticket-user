import React, { FC } from "react";
import ChairIcon from "@mui/icons-material/Chair";
import ChairAltOutlinedIcon from "@mui/icons-material/ChairAltOutlined";
import { Checkbox } from "@mui/material";
const SeatLine: FC<{
  lineCode: string;
  setFieldValue: any;
  values: any;
  name: string;
}> = ({ lineCode, setFieldValue, values, name }): JSX.Element => {
  return (
    <ul className="seat--area">
      <li className="front-seat">
        <ul>
          <li className="single-seat">
            <Checkbox
              // {...label}
              className="chair"
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][0]}
              // checked={true}
              onChange={(e) => {
                setFieldValue(`${name}[0]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][1]}
              onChange={(e) => {
                setFieldValue(`${name}[1]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][2]}
              onChange={(e) => {
                setFieldValue(`${name}[2]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][3]}
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
              // {...label}
              className="chair"
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][4]}
              onChange={(e) => {
                setFieldValue(`${name}[4]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][5]}
              onChange={(e) => {
                setFieldValue(`${name}[5]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][6]}
              onChange={(e) => {
                setFieldValue(`${name}[6]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][7]}
              onChange={(e) => {
                setFieldValue(`${name}[7]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][8]}
              onChange={(e) => {
                setFieldValue(`${name}[8]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][9]}
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
              // {...label}
              className="chair"
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][10]}
              onChange={(e) => {
                setFieldValue(`${name}[10]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][11]}
              onChange={(e) => {
                setFieldValue(`${name}[11]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][12]}
              onChange={(e) => {
                setFieldValue(`${name}[12]`, e.target.checked);
              }}
            />
          </li>
          <li className="single-seat">
            <Checkbox
              // {...label}
              icon={<ChairIcon />}
              checkedIcon={<ChairIcon />}
              checked={values[name][13]}
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
