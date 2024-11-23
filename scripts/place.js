document.addEventListener("DOMContentLoaded", () => {
    // Footer Dynamic Data
    const lastModified = document.lastModified;
    document.getElementById("last-modified").textContent = lastModified;

    // Wind Chill Calculation
    const temp = 20; // Celsius
    const windSpeed = 10; // km/h

    const calculateWindChill = (t, v) => {
        if (t <= 10 && v > 4.8) {
            return (
                13.12 +
                0.6215 * t -
                11.37 * Math.pow(v, 0.16) +
                0.3965 * t * Math.pow(v, 0.16)
            ).toFixed(1);
        }
        return "N/A";
    };

    document.getElementById("wind-chill").textContent = calculateWindChill(temp, windSpeed);
});
