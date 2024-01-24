import ContentLoader from 'react-content-loader'

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={466}
    viewBox="0 0 280 466"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="64" y="58" rx="0" ry="0" width="0" height="1" />
    <rect x="0" y="265" rx="15" ry="15" width="280" height="30" />
    <rect x="0" y="315" rx="10" ry="10" width="280" height="88" />
    <rect x="130" y="417" rx="25" ry="25" width="150" height="45" />
    <rect x="0" y="420" rx="10" ry="10" width="80" height="39" />
    <circle cx="140" cy="124" r="124" />
  </ContentLoader>
)

export default Skeleton
