import React, { useMemo } from 'react';
import { Bar } from '@visx/shape';
import { Group } from '@visx/group';
import { AxisBottom } from '@visx/axis';
import { scaleBand, scaleLinear } from '@visx/scale';
import { useTooltip, useTooltipInPortal, defaultStyles } from '@visx/tooltip';
import { localPoint } from '@visx/event';

const verticalMargin = 120;

// accessors
const getData = (d) => d.week;
const getValue = (d) => d.value;
const getDataFrequency = (d) => ((d.value + 3) / 200) * 100;

export default function BarChart( props ) {
    const data = props.data;
    const { tooltipOpen, tooltipLeft, tooltipTop, tooltipData, hideTooltip, showTooltip } = useTooltip();
    let tooltipTimeout;

    const { containerRef, TooltipInPortal } = useTooltipInPortal({
        scroll: true,
    });

    let color1 = "#00f681";
    let color2 = "#00d2eb";

    if (props.alt) {
        color1 = "#00f681";
        color2 = "#00d2eb";
    } else {
        color1 = "#da2979";
        color2 = "#c181f8";
    }

    const tooltipStyles = {
        ...defaultStyles,
        minWidth: 60,
        backgroundColor: 'black',
        color: 'white',
        borderRadius: 8
    };

    // bounds
    const xMax = props.width;
    const yMax = props.height - verticalMargin;

    // scales, memoize for performance
    const xScale = useMemo(
        () =>
            scaleBand({
                range: [0, xMax],
                round: true,
                domain: data.map(getData),
                padding: 0.1,
            }),
        [xMax],
    );
    const yScale = useMemo(
        () =>
            scaleLinear({
                range: [yMax, 0],
                round: true,
                domain: [0, Math.max(...data.map(getDataFrequency))],
            }),
        [yMax],
    );

    return props.width < 10 ? null : (
        <>
            <svg ref={containerRef} width={props.width} height={props.height}>
                <defs>
                    <linearGradient id="myGradient" gradientTransform="rotate(90)">
                        <stop offset="0%" stop-color={color1} />
                        <stop offset="100%" stop-color={color2} />
                    </linearGradient>
                </defs>

                <rect width={props.width} height={props.height} fill="none" />
                <Group top={verticalMargin / 2}>
                    {data.map((d) => {
                        const letter = getData(d);
                        const barWidth = xScale.bandwidth();
                        const barHeight = yMax - (yScale(getDataFrequency(d)) ?? 0);
                        const barX = xScale(letter);
                        const barY = yMax - barHeight;
                        return (
                            <>
                                <Bar
                                    key={`bar-${letter}`}
                                    x={barX}
                                    y={barY}
                                    width={barWidth}
                                    height={barHeight}
                                    fill="url(#myGradient)"
                                    rx={5}
                                    onMouseLeave={() => {
                                        tooltipTimeout = window.setTimeout(() => {
                                            hideTooltip();
                                        }, 300);
                                    }}
                                    onMouseMove={(event) => {
                                        if (tooltipTimeout) clearTimeout(tooltipTimeout);
                                        const eventSvgCoords = localPoint(event);
                                        showTooltip({
                                            tooltipData: d,
                                            tooltipTop: barY - 10,
                                            tooltipLeft: barX - barWidth * 1.2,
                                        });
                                    }}
                                />
                            </>
                        );
                    })}
                    <AxisBottom
                        scale={xScale}
                        hideTicks={true}
                        hideAxisLine={true}
                        tickLabelProps={() => ({
                            fill: "white",
                            fontSize: 12,
                            textAnchor: 'middle',
                        })}
                        top={yMax}
                        numTicks={data.length}
                    />
                </Group>
            </svg>
            {tooltipOpen && tooltipData && (
                <TooltipInPortal top={tooltipTop} left={tooltipLeft} style={tooltipStyles}>
                    <div style={{ color: "#a44afe" }}>
                        <strong>GW {getData(tooltipData)}</strong>
                    </div>
                    <div>Points</div>
                    <div>
                        <small>{getValue(tooltipData)}</small>
                    </div>
                </TooltipInPortal>
            )}
        </>
    );
}