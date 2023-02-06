import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Card from '@mui/joy/ProductCard';
import CardContent from '@mui/joy/CardContent';
import CardOverflow from '@mui/joy/CardOverflow';
import Divider from '@mui/joy/Divider';
import Typography from '@mui/joy/Typography';
import Button from '@mui/joy/Button';
import GetAppRoundedIcon from '@mui/icons-material/GetAppRounded';
import Chip from '@mui/joy/Chip';
import { CssVarsProvider } from '@mui/joy/styles';
import clsx from 'clsx';
import Translate from '@docusaurus/Translate';
import Link from '@docusaurus/Link';

// Data Start

const PricingList = [
  {
    name: 'Website Me',
    description: (
      <>
        Website only at ₹5000. WordPress development if customer says. Charges
        apply on extras.
      </>
    ),
    button: (
      <>
        <Link className="button button--primary" to="/contact">
          Contact Us!
        </Link>
      </>
    ),
    url: {
      status: "Website Package"
    },
  },
  {
    name: 'Applifier',
    description: <>Android© App with App on Google Play© only at ₹10,000</>,
    button: (
      <>
        <Link className="button button--primary" to="/contact">
          Contact us!
        </Link>
      </>
    ),
    url: {
      status: "App Package"
    },
  },
  {
    name: 'Combined Packager',
    description: <>All features in Website Me and Applifer only at ₹12,500</>,
    button: (
      <Link className="button button--primary" to="/contact">
        Contact us!
      </Link>
    ),
    url: {
      status: "Two-in-One Package"
    },
  },
];

interface Props {
  name: string;
  url: {
    download?: string;
    page?: string;
    type?: string;
    github?: string;
    status?: string;
  };
  description: JSX.Element;
  button: JSX.Element;
}

// Data End and Functions Start

function PricingCard({ name, url, description, button }: Props) {
  return (
    <CssVarsProvider>
      <div className="col col--12 margin-bottom--lg">
        <div className={clsx('card')}>
          {/* {image && (
            <div className={clsx('card__image')}>
              <Link to={url.page}>
                <img src={image} alt={name} title={name}></img>
              </Link>
            </div>
          )} */}
          <div className="card__body">
            <h3>{name}</h3>
            {description && <p>{description}</p>}
            <Chip
              color="primary"
              size="sm"
              variant="solid"
            >{url.status}</Chip>
          </div>
          <div className="card__footer">
            <div className="button-group button-group--block">{button}</div>
          </div>
        </div>
      </div>
    </CssVarsProvider>
  );
}

export function Products(): JSX.Element {
  return (
    <>
      <div>
        <section>
          <h2 className="featuresHeading">Pricing</h2>
          <div className="features">
            <div className="col col--12">
              <div className="row">
                {PricingList.map((games) => (
                  <>
                    <PricingCard
                      key={games.name}
                      {...games}
                    />
                    <br />
                  </>
                ))}
              </div>
            </div>
          </div>
          <hr />
        </section>
      </div>
    </>
  );
}
