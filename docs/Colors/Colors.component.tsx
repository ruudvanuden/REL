import React from 'react';
import { ColorsProps } from '.';

const Icon = ({ className }: { className: string }) => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path d="M14 12L14.9664 12.257C15.0462 11.9568 14.9821 11.6367 14.7928 11.3905C14.6035 11.1443 14.3106 11 14 11V12ZM6 12V11C5.68945 11 5.39652 11.1443 5.20723 11.3905C5.01794 11.6367 4.95378 11.9568 5.03358 12.257L6 12ZM6.59817 12.2691C6.04588 12.2691 5.59817 12.7168 5.59817 13.2691C5.59817 13.8214 6.04588 14.2691 6.59817 14.2691V12.2691ZM13.4018 14.2691C13.9541 14.2691 14.4018 13.8214 14.4018 13.2691C14.4018 12.7168 13.9541 12.2691 13.4018 12.2691V14.2691ZM6 7.5C6 7.22386 6.22386 7 6.5 7V9C7.32843 9 8 8.32843 8 7.5H6ZM6.5 7C6.77614 7 7 7.22386 7 7.5H5C5 8.32843 5.67157 9 6.5 9V7ZM7 7.5C7 7.77614 6.77614 8 6.5 8V6C5.67157 6 5 6.67157 5 7.5H7ZM6.5 8C6.22386 8 6 7.77614 6 7.5H8C8 6.67157 7.32843 6 6.5 6V8ZM5.5 8.5H7.5V6.5H5.5V8.5ZM13 7.5C13 7.22386 13.2239 7 13.5 7V9C14.3284 9 15 8.32843 15 7.5H13ZM13.5 7C13.7761 7 14 7.22386 14 7.5H12C12 8.32843 12.6716 9 13.5 9V7ZM14 7.5C14 7.77614 13.7761 8 13.5 8V6C12.6716 6 12 6.67157 12 7.5H14ZM13.5 8C13.2239 8 13 7.77614 13 7.5H15C15 6.67157 14.3284 6 13.5 6V8ZM12.5 8.5H14.5V6.5H12.5V8.5ZM18 10C18 14.4183 14.4183 18 10 18V20C15.5228 20 20 15.5228 20 10H18ZM10 18C5.58172 18 2 14.4183 2 10H0C0 15.5228 4.47715 20 10 20V18ZM2 10C2 5.58172 5.58172 2 10 2V0C4.47715 0 0 4.47715 0 10H2ZM10 2C14.4183 2 18 5.58172 18 10H20C20 4.47715 15.5228 0 10 0V2ZM13.0336 11.743C12.6925 13.0257 11.4763 14 10 14V16C12.3637 16 14.3875 14.4343 14.9664 12.257L13.0336 11.743ZM10 14C8.52366 14 7.30747 13.0257 6.96642 11.743L5.03358 12.257C5.61253 14.4343 7.63634 16 10 16V14ZM6 13H14V11H6V13ZM6.59817 14.2691H13.4018V12.2691H6.59817V14.2691Z" />
    </svg>
  );
};

export const Colors = ({ theme, ...props }: ColorsProps) => {
  return (
    <div
      className="rel_base rel_container rel_flex rel_flex-col rel_gap-10 rel_bg-default rel_px-16 rel_py-6"
      data-rel-theme={theme}
      {...props}
    >
      <div className="rel_flex rel_flex-col rel_gap-6">
        <div
          style={{
            color: '#00DA16',
            fontSize: '12px',
          }}
        >
          bg-default
        </div>
        <div className=" rel_columns-2 rel_gap-2 rel_space-y-3">
          <div className="rel_text-on-bg-default">text-on-bg-default</div>
          <div className="rel_text-on-bg-accent">text-on-bg-accent</div>
          <div className="rel_text-heading-md rel_text-on-bg-large-text">
            text-on-bg-large-text
          </div>
          <div className="rel_text-on-bg-subtle">text-on-bg-subtle</div>
          <div className="rel_text-on-bg-link-idle rel_underline">
            text-on-bg-link-idle
          </div>
          <div className="rel_text-on-bg-link-hover rel_underline">
            text-on-bg-link-hover
          </div>
          <div className="rel_text-on-bg-link-pressed rel_underline">
            text-on-bg-link-pressed
          </div>
        </div>
      </div>
      <div className="rel_flex rel_gap-6 ">
        <div
          className="rel_flex rel_items-center rel_gap-2"
          style={{
            color: '#00DA16',
            fontSize: '12px',

            textShadow: '0px 0px 1px #FFFFFF',
          }}
        >
          <Icon className="rel_fill-on-bg-default" />
          fill-on-bg-default
        </div>
        <div
          className="rel_flex rel_items-center rel_gap-2"
          style={{
            color: '#00DA16',
            fontSize: '12px',
          }}
        >
          <Icon className="rel_fill-on-bg-accent" />
          fill-on-bg-accent
        </div>
        <div
          className="rel_flex rel_items-center rel_gap-2"
          style={{
            color: '#00DA16',
            fontSize: '12px',
          }}
        >
          <Icon className="rel_fill-on-bg-subtle" />
          fill-on-bg-subtle
        </div>
      </div>
      <div className="rel_flex rel_flex-col rel_gap-8">
        <div
          style={{
            color: '#00DA16',
            fontSize: '24px',
          }}
          className="rel_text-heading-md"
        >
          CONTAINER
        </div>
        <div className="rel_grid rel_grid-cols-4 rel_gap-6">
          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_bg-1 rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-1
            </div>
            <div className="rel_text-on-bg-1">text-on-bg-1</div>
            <div className="rel_text-on-bg-1-accent">text-on-bg-1-accent</div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-1" />
              fill-on-bg-1
            </div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-1-accent" />
              fill-on-bg-1-accent
            </div>
          </div>
          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_bg-2 rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-2
            </div>
            <div className="rel_text-on-bg-2">text-on-bg-2</div>
            <div className="rel_text-on-bg-2-accent">text-on-bg-2-accent</div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-2" />
              fill-on-bg-2
            </div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-2-accent" />
              fill-on-bg-2-accent
            </div>
          </div>
          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_bg-3 rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-3
            </div>
            <div className="rel_text-on-bg-3">text-on-bg-3</div>
            <div className="rel_text-on-bg-3-accent">text-on-bg-3-accent</div>
            <div className="rel_text-on-bg-3-subtle">text-on-bg-3-subtle</div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-3" />
              fill-on-bg-3
            </div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-3-accent" />
              fill-on-bg-3-accent
            </div>
          </div>
          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_bg-4 rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-4
            </div>
            <div className="rel_text-on-bg-4">text-on-bg-4</div>
            <div className="rel_text-on-bg-4-accent">text-on-bg-4-accent</div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-4" />
              fill-on-bg-4
            </div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-4-accent" />
              fill-on-bg-4-accent
            </div>
          </div>
        </div>
      </div>
      <div className="rel_flex rel_flex-col rel_gap-8">
        <div
          style={{
            color: '#00DA16',
            fontSize: '24px',
          }}
          className="rel_text-heading-md"
        >
          FEEDBACK
        </div>
        <div className="rel_grid rel_grid-cols-4 rel_gap-6">
          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_bg-info rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-info
            </div>
            <div className="rel_text-on-bg-info">text-on-bg-info</div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-info" />
              fill-on-bg-info
            </div>
          </div>
          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_bg-success rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-success
            </div>
            <div className="rel_text-on-bg-success">text-on-bg-success</div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-success" />
              fill-on-bg-success
            </div>
          </div>

          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_bg-warning rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-warning
            </div>
            <div className="rel_text-on-bg-warning">text-on-bg-warning</div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-warning" />
              fill-on-bg-warning
            </div>
          </div>
          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_bg-error rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-error
            </div>
            <div className="rel_text-on-bg-error">text-on-bg-error</div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-error" />
              fill-on-bg-error
            </div>
          </div>
        </div>
      </div>
      <div className="rel_flex rel_flex-col rel_gap-8">
        <div className="rel_grid rel_grid-cols-4 rel_gap-6">
          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_border rel_border-bg-info-inverse rel_bg-info-inverse rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
              className="test"
            >
              bg-info-inverse
            </div>
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              border-bg-info-inverse
            </div>
            <div className="rel_text-on-bg-info-inverse">
              text-on-bg-info-inverse
            </div>
            <div className="rel_text-on-bg-info-inverse-accent">
              text-on-bg-info-inverse-accent
            </div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-info-inverse" />
              fill-on-bg-info-inverse
            </div>
          </div>
          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_border rel_border-bg-success-inverse rel_bg-success-inverse rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-success-inverse
            </div>
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              border-bg-success-inverse
            </div>
            <div className="rel_text-on-bg-success-inverse">
              text-on-bg-success-inverse
            </div>
            <div className="rel_text-on-bg-success-inverse-accent">
              text-on-bg-success-inverse-accent
            </div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-success-inverse" />
              fill-on-bg-success-inverse
            </div>
          </div>

          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_border rel_border-bg-warning-inverse rel_bg-warning-inverse  rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-warning-inverse
            </div>
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              border-bg-warning-inverse
            </div>
            <div className="rel_text-on-bg-warning-inverse">
              text-on-bg-warning-inverse
            </div>
            <div className="rel_text-on-bg-warning-inverse-accent">
              text-on-bg-warning-inverse-accent
            </div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-warning-inverse" />
              ill-on-bg-warning-inverse
            </div>
          </div>
          <div className="rel_grid rel_gap-4 rel_rounded-2 rel_border rel_border-bg-error-inverse rel_bg-error-inverse rel_px-6 rel_py-6">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              bg-error-inverse
            </div>
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              border-bg-error-inverse
            </div>
            <div className="rel_text-on-bg-error-inverse">
              text-on-bg-error-inverse
            </div>
            <div className="rel_text-on-bg-error-inverse-accent">
              text-on-bg-error-inverse-accent
            </div>
            <div
              className="rel_flex rel_items-center rel_gap-2"
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              <Icon className="rel_flex-shrink-0 rel_fill-on-bg-error-inverse" />
              fill-on-bg-error-inverse
            </div>
          </div>
        </div>
      </div>
      <div className="rel_flex rel_flex-col rel_gap-8">
        <div
          style={{
            color: '#00DA16',
            fontSize: '24px',
          }}
          className="rel_text-heading-md"
        >
          BORDER
        </div>
        <div className="rel_grid rel_grid-cols-2 rel_gap-6">
          <div className="rel_rounded-2 rel_border rel_border-bg-default rel_px-6 rel_py-2">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              border-bg-default
            </div>
          </div>
          <div className="rel_rounded-2 rel_border rel_border-bg-accent rel_px-6 rel_py-2">
            <div
              style={{
                color: '#00DA16',
                fontSize: '12px',
              }}
            >
              border-bg-accent
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
