import React from 'react';
import { TypographyProps } from '.';

export const Typography = ({ ...props }: TypographyProps) => {
  return (
    <div
      className="rel_base rel_container rel_flex rel_flex-col rel_gap-16 rel_bg-default rel_py-4 rel_text-on-bg-default"
      data-rel-theme="light"
      {...props}
    >
      {/* heading */}
      <div className="rel_flex rel_flex-col rel_gap-6">
        <span
          style={{
            color: '#00DA16',
            fontSize: '24px',
          }}
        >
          HEADING
        </span>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-heading-2xl">heading 2XL</div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
            }}
          >
            text-heading-2xl
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-heading-xl">heading XL</div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
            }}
          >
            text-heading-xl
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-heading-lg">heading LG</div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
            }}
          >
            text-heading-lg
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-heading-md">heading MD</div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
            }}
          >
            text-heading-md
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-heading-sm">heading SM</div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
            }}
          >
            text-heading-sm
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-heading-xs">heading XS</div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
            }}
          >
            text-heading-xs
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-heading-2xs">heading 2XS</div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
            }}
          >
            text-heading-2xs
          </span>
        </div>
      </div>
      {/* paragraph */}
      <div className="rel_flex rel_flex-col rel_gap-6">
        <span
          style={{
            color: '#00DA16',
            fontSize: '24px',
          }}
        >
          PARAGRAPH
        </span>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-paragraph-lg">
            paragraph LG
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id mi felis. Fusce tristique blandit velit quis consectetur. Nulla
            condimentum est ac quam sollicitudin, sed tempor risus porttitor.
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
              flexShrink: 0,
              width: '30%',
            }}
          >
            text-paragraph-lg
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-paragraph-default">
            paragraph default
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id mi felis. Fusce tristique blandit velit quis consectetur. Nulla
            condimentum est ac quam sollicitudin, sed tempor risus porttitor.
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
              flexShrink: 0,
              width: '30%',
            }}
          >
            text-paragraph-default
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-paragraph-md">
            paragraph MD
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id mi felis. Fusce tristique blandit velit quis consectetur. Nulla
            condimentum est ac quam sollicitudin, sed tempor risus porttitor.
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
              flexShrink: 0,
              width: '30%',
            }}
          >
            text-paragraph-md
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-paragraph-sm">
            paragraph SM
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id mi felis. Fusce tristique blandit velit quis consectetur. Nulla
            condimentum est ac quam sollicitudin, sed tempor risus porttitor.
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
              flexShrink: 0,
              width: '30%',
            }}
          >
            text-paragraph-sm
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div className="rel_text-paragraph-xs">
            paragraph XS
            <br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            id mi felis. Fusce tristique blandit velit quis consectetur. Nulla
            condimentum est ac quam sollicitudin, sed tempor risus porttitor.
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
              flexShrink: 0,
              width: '30%',
            }}
          >
            text-paragraph-xs
          </span>
        </div>
      </div>
      {/* link */}
      <div className="rel_flex rel_flex-col rel_gap-6">
        <span
          style={{
            color: '#00DA16',
            fontSize: '24px',
          }}
        >
          LINK
        </span>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div>
            <a
              href="#"
              className="underline rel_text-link-heading-sm rel_text-on-bg-link-idle"
            >
              link heading SM
            </a>
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',

              flexShrink: 0,
            }}
          >
            text-link-heading-sm
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div>
            <a
              href="#"
              className="underline rel_text-link-lg rel_text-on-bg-link-idle"
            >
              link heading LG
            </a>
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',
              flexShrink: 0,
            }}
          >
            text-link-heading-lg
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div>
            <a
              href="#"
              className="underline rel_text-link-paragraph rel_text-on-bg-link-idle"
            >
              link paragraph default
            </a>
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',

              flexShrink: 0,
            }}
          >
            text-link-paragraph
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div>
            <a
              href="#"
              className="underline rel_text-link-md rel_text-on-bg-link-idle"
            >
              link MD
            </a>
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',

              flexShrink: 0,
            }}
          >
            text-link-md
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div>
            <a
              href="#"
              className="underline rel_text-link-sm rel_text-on-bg-link-idle"
            >
              link SM
            </a>
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',

              flexShrink: 0,
            }}
          >
            text-link-sm
          </span>
        </div>
        <div className="rel_flex rel_items-center rel_gap-6">
          <div>
            <a
              href="#"
              className="underline rel_text-link-xs rel_text-on-bg-link-idle"
            >
              link XS
            </a>
          </div>
          <span
            style={{
              color: '#00DA16',
              fontSize: '12px',

              flexShrink: 0,
            }}
          >
            text-link-xs
          </span>
        </div>
      </div>
    </div>
  );
};
