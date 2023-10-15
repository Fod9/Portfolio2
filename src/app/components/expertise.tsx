import React from 'react';
import ExpertiseBlock from "@/app/components/expertiseBlock";

const Expertise = () => {
    return (
        <div id={"expertise"}>
            <h2>My expertise</h2>
            <ExpertiseBlock
                index={1}
                image={"monitor.png"}
                title={"Software Development"}
                text={"Multiple experiences with OOP languages like : Javascript, Python, TypeScript and C++."}
            />
            <ExpertiseBlock
                index={2}
                image={"react.png"}
                title={"React, NextJS"}
                text={"Specialize in Javascript framework frontend/Backend like React, Vue and NextJS and NodeJS."}
            />
            <ExpertiseBlock
                index={3}
                image={"brain.png"}
                title={"Artificial Intelligence"}
                text={"Passionate by AI since 2022, I have followed some courses like Machine Learnia guide and do a lot of projects."}
            />
        </div>
    );
};

export default Expertise;