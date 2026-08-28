"""
Python translation of the S-algol "fast Murray polygon" program.

This version:
  - Uses 0-indexing throughout (no unused index-0 padding).
  - Has the radices hardcoded below (no input() calls) so it just runs.
  - Saves the result to murray_polygon.png and also tries to show it
    interactively.

To change the shape, edit X_RADICES / Y_RADICES near the bottom.
Each is a list of positive integers (the "base" for that digit of the
mixed-radix counter). More/larger values -> more points -> denser curve.
"""

import matplotlib.pyplot as plt


def change_parities(p, start):
    """Flip p[i] for i = start, start-2, start-4, ... down to 0 or 1."""
    for i in range(start, -1, -2):
        p[i] = not p[i]


def increment(d, r, i):
    """
    Mixed-radix counter increment (recursive).
    If digit i hasn't hit its radix limit, bump it and return its index;
    otherwise reset it to 0 and carry into the next digit.
    """
    if d[i] < r[i] - 1:
        d[i] += 1
        return i
    else:
        d[i] = 0
        return increment(d, r, i + 1)


def number_pts(r, start, inc):
    """Product of r[j] for j = start, start+inc, ... up to (but excluding)
    the last slot of r."""
    res = 1
    for j in range(start, len(r) - 1, inc):
        res *= r[j]
    return res


def draw(segments, xmin, xmax, ymin, ymax, filename="murray_polygon.png"):
    """Stand-in for the S-algol draw(screen, picture, xmin, xmax, ymin, ymax)."""
    fig, ax = plt.subplots()
    for (sx, sy), (ex, ey) in segments:
        ax.plot([sx, ex], [sy, ey], color="black", linewidth=0.8)
    ax.set_xlim(xmin, xmax)
    ax.set_ylim(ymin, ymax)
    ax.set_aspect("equal")
    ax.axis("off")
    fig.savefig(filename, dpi=200, bbox_inches="tight")
    print(f"Saved plot to {filename}")
    try:
        plt.show()
    except Exception:
        pass  # no display available (e.g. headless environment) - PNG is already saved


def main(x_vals, y_vals):
    x_rad, y_rad = len(x_vals), len(y_vals)
    max_rad = x_rad if x_rad > y_rad else y_rad
    complexity = 2 * max_rad

    # 0-indexed arrays, size complexity + 1 (indices 0 .. complexity)
    digits = [0] * (complexity + 1)
    radices = [1] * (complexity + 1)
    parities = [True] * (complexity + 1)

    # x radices go in even slots (0, 2, 4, ...), y radices in odd slots (1, 3, 5, ...)
    for k, v in enumerate(x_vals):
        radices[2 * k] = v
    for k, v in enumerate(y_vals):
        radices[2 * k + 1] = v

    no_pts = number_pts(radices, 0, 1)
    nx = number_pts(radices, 0, 2)
    ny = number_pts(radices, 1, 2)
    width = nx if nx > ny else ny

    x1 = y1 = x2 = y2 = 0
    segments = []

    for _ in range(no_pts):
        try:
            i = increment(digits, radices, 0)
        except IndexError:
            # The mixed-radix counter has completed a full cycle and
            # "carried out" past the last digit -- there's no further
            # real digit for it to land on, so the curve is complete.
            break
        change_parities(parities, i)
        inc = 1 if parities[i + 1] else -1
        if i % 2 == 0:
            x2 += inc
        else:
            y2 += inc
        segments.append(((x1, y1), (x2, y2)))
        if i % 2 == 0:
            x1 = x2
        else:
            y1 = y2

    draw(segments, -0.15 * width, 0.85 * width, 0, width)


if __name__ == "__main__":
    # Hardcoded radices -- edit these to change the curve.
    X_RADICES = [3,7]
    Y_RADICES = [3,7]
    main(X_RADICES, Y_RADICES)
