import React from 'react';
import { RadiusProps } from '.';

export const Radius = ({ ...props }: RadiusProps) => {
  return (
    <div
      {...props}
      className="rel_base rel_container rel_bg-default rel_text-on-bg-default"
      data-rel-theme="light"
    >
      <table className="rel_w-full rel_border-collapse [&_td]:rel_border-t [&_td]:rel_border-bg-default [&_td]:rel_p-3 [&_th]:rel_p-3 [&_th]:rel_text-left">
        <thead>
          <tr>
            <th>name</th>
            <th>CSS variable</th>
            <th>size</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>rounded-1</td>
            <td>--radius-01</td>
            <td>4px</td>
            <td>
              <div
                className="rel_size-10 rel_rounded-1 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>rounded-2</td>
            <td>--radius-02</td>
            <td>8px</td>
            <td>
              <div
                className="rel_size-10 rel_rounded-2 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>rounded-3</td>
            <td>--radius-03</td>
            <td>12px</td>
            <td>
              <div
                className="rel_size-10 rel_rounded-3 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>rounded-full</td>
            <td>--radius-full</td>
            <td>9999px</td>
            <td>
              <div
                className="rel_size-10 rel_rounded-full "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
