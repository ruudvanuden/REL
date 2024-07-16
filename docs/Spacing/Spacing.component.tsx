import React from 'react';
import { SpacingProps } from '.';

export const Spacing = ({ ...props }: SpacingProps) => {
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
            <td>0</td>
            <td>-</td>
            <td>0</td>
            <td>
              <div className="rel_h-3 rel_w-0"></div>
            </td>
          </tr>
          <tr>
            <td>1</td>
            <td>--spacing-01</td>
            <td>4px</td>
            <td>
              <div
                className="rel_h-3 rel_w-1 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>--spacing-02</td>
            <td>8px</td>
            <td>
              <div
                className="rel_h-3 rel_w-2 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>3</td>
            <td>--spacing-03</td>
            <td>12px</td>
            <td>
              <div
                className="rel_h-3 rel_w-3 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>4</td>
            <td>--spacing-04</td>
            <td>16px</td>
            <td>
              <div
                className="rel_h-3 rel_w-4 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>6</td>
            <td>--spacing-06</td>
            <td>24px</td>
            <td>
              <div
                className="rel_h-3 rel_w-6 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>8</td>
            <td>--spacing-08</td>
            <td>32px</td>
            <td>
              <div
                className="rel_h-3 rel_w-8 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>10</td>
            <td>--spacing-10</td>
            <td>40px</td>
            <td>
              <div
                className="rel_h-3 rel_w-10 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>12</td>
            <td>--spacing-12</td>
            <td>48px</td>
            <td>
              <div
                className="rel_h-3 rel_w-12 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>16</td>
            <td>--spacing-16</td>
            <td>64px</td>
            <td>
              <div
                className="rel_h-3 rel_w-16 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>20</td>
            <td>--spacing-20</td>
            <td>80px</td>
            <td>
              <div
                className="rel_h-3 rel_w-20 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>24</td>
            <td>--spacing-24</td>
            <td>96px</td>
            <td>
              <div
                className="rel_h-3 rel_w-24 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
          <tr>
            <td>32</td>
            <td>--spacing-32</td>
            <td>128px</td>
            <td>
              <div
                className="rel_h-3 rel_w-32 "
                style={{ background: '#00DA16' }}
              ></div>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
