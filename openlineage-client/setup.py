from setuptools import setup, find_packages

setup(
    name="duckcode-openlineage",
    version="0.1.0",
    packages=find_packages(),
    install_requires=[
        "openlineage-python>=1.8.0",
        "requests>=2.31.0",
        "pydantic>=2.5.2",
    ],
    author="Duckcode",
    author_email="hello@example.com",
    description="OpenLineage client for Duckcode Observability platform",
    keywords="openlineage,data lineage,data observability",
    python_requires=">=3.9",
)
