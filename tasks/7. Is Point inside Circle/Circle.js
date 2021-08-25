import Point from './Point';

export default function (center, radius) {
  return {
    center,
    radius,
    getCircumference() {
      return 2 * radius * Math.PI;
    },
    getArea() {
      return radius ** 2 * Math.PI;
    },
    includes(Point) {
      // TODO: write your code here

      const xSq = (Point.x - center.x),
        ySq = (Point.y - center.y);

      return (xSq * xSq + ySq * ySq) <= radius ** radius;

    }
  }
}
